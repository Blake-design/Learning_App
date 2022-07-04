const { AuthenticationError } = require("apollo-server-express");
const { PubSub, withFilter } = require("graphql-subscriptions");
const { User, Message, Conversation } = require("../models");

const { signToken } = require("../utils/auth");

const pubsub = new PubSub();
let activeUsers = [];

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
      activeUsers.push(user);
      pubsub.publish("ACTIVE_USERS", {
        userActive: activeUsers,
      });

      return { token, user };
    },
    logout: async (parents, args, context) => {
      const filteredUsers = activeUsers.filter((user) => {
        user.UserName !== context.user.userName;
      });

      activeUsers = filteredUsers;
      pubsub.publish("ACTIVE_USERS", {
        userActive: activeUsers,
      });
    },

    addUser: async (parent, { name, userName, email, password }) => {
      const user = await User.create({
        name,
        userName,
        password,
        email,
      });

      const token = signToken(user);
      return { token, user };
    },

    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ userName: context.user.userName });
      }
      throw new AuthenticationError("Please log in");
    },

    updateUser: async (parent, { bio, name }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { userName: context.user.userName },
          { bio, name },
          { new: true }
        );
      }
      throw new AuthenticationError("Please log in");
    },

    createMessage: async (parent, { text, receiverId }, context) => {
      pubsub.publish("MESSAGE_CREATED", {
        messages: { text, receiverId },
      });
      return Message.create(text, receiverId, { senderId: context.user._id });
    },
    createConvo: async (parent, args, context) => {
      /// find a conversation with the logged in users id

      const convo = Conversation.findOne({ participants: context.user._id }); /// perhaps this should search for all participants

      /// if the conversation doesnt not exist create one
      return convo;
    },
  },
  Subscription: {
    userActive: {
      subscribe: () => pubsub.asyncIterator("ACTIVE_USERS"),
    },
    messages: {
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
