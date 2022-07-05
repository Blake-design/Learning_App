const { AuthenticationError } = require("apollo-server-express");
const { PubSub, withFilter } = require("graphql-subscriptions");
const { User, Message, Conversation, ActiveUsers } = require("../models");

const { signToken } = require("../utils/auth");

const pubsub = new PubSub();
let activeUsers = [];

const resolvers = {
  Query: {
    // find all user models
    users: async () => {
      return User.find(); // TODO: limit data returned
    },

    // find a specific user
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("settings"); // TODO: use settings to determin if email is shared or not //TODO: limit user to not return password
    },

    // returns logged in user with settings model
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({
          username: context.user.username,
        }).populate("settings");
        return user;
      }
      throw new AuthenticationError("Please login to view your profile.");
    },
  },
  Mutation: {
    // login in user by authenticating credentials
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
      //TODO: add users from activeUsers model
      return { token, user }; //TODO: check if i need to send back a user
    },

    // logout user   //TODO: remove user from activeUsers model
    logout: async (parents, args, context) => {
      const filteredUsers = activeUsers.filter((user) => {
        user.username !== context.user.username;
      });

      activeUsers = filteredUsers;
      pubsub.publish("ACTIVE_USERS", {
        userActive: activeUsers,
      });
    },

    ///  adduser will sign up new users and log them in
    addUser: async (parent, { name, username, email, password }) => {
      const user = await User.create({
        name,
        username,
        password,
        email,
      });

      const token = signToken(user);
      return { token, user }; //TODO: check if i  need to send back a user
    },

    // removes user from database (if logged in)
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ username: context.user.username });
      }
      throw new AuthenticationError("Please log in");
    },

    // update user bio and name
    updateUser: async (parent, { bio, name }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { username: context.user.username },
          { bio, name },
          { new: true }
        );
      }
      throw new AuthenticationError("Please log in");
    },

    /// creates a new message using sender id and emits MESSAGE CREATED event
    createMessage: async (parent, { text, receiverId }, context) => {
      pubsub.publish("MESSAGE_CREATED", {
        messages: { text, receiverId },
      });
      return Message.create(text, receiverId, { senderId: context.user._id }); //TODO: this resolver had not been tested
    },

    // finds a convo with participants or creates one
    createConvo: async (parent, args, context) => {
      // find a conversation with the logged in users id

      const convo = Conversation.findOne({ participants: context.user._id }); // TODO:perhaps this should search for all participants

      // if the conversation doesnt not exist create one
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
