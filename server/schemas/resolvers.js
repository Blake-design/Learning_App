const { AuthenticationError } = require("apollo-server-express");
const { PubSub, withFilter } = require("graphql-subscriptions");
const { User } = require("../models");
const Message = require("../models/Message");
const { signToken } = require("../utils/auth");

const pubsub = new PubSub();

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userName }) => {
      return User.findOne({ userName }).populate("settings");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({
          userName: context.user.userName,
        }).populate("settings");
        return user;
      }
      throw new AuthenticationError("Please login to view your profile.");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Oops you entered the wrong credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Oops you entered the wrong credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (
      parent,
      { firstName, lastName, userName, email, password }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        userName,
        password,
        email,
        joined: Date.now(),
      });

      const token = signToken(user);
      return { token, user };
    },
    removeUser: async (parent, args, context) => {
      console.log(context.user);

      if (context.user) {
        return User.findOneAndDelete({ userName: context.user.userName });
      }
      throw new AuthenticationError("Please log in");
    },
    createMessage: (parent, { text, receiverId }, context) => {
      pubsub.publish("MESSAGE_CREATED", {
        messageCreated: { text, receiverId },
      });
      return Message.create(text, receiverId, { senderId: context.user._id });
    },
  },
  Subscription: {
    messageCreated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator("MESSAGE_CREATED"),
        (payload, variables) => {
          return payload.messageCreated.receiverId === variables.receiverId;
        }
      ),
    },
  },
};
module.exports = resolvers;
