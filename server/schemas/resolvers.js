const { AuthenticationError } = require("apollo-server-express");
const { PubSub, withFilter } = require("graphql-subscriptions");
const { User, Message, Conversation, Request } = require("../models");

const { signToken } = require("../utils/auth");

const pubsub = new PubSub();
let activeUsers = [];

const resolvers = {
  Query: {
    // find all user models
    users: async () => {
      return User.find({}, "username active");
    },

    // find a specific user
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-password")
        .populate("settings") // TODO: use settings to determine if email is shared or not
        .populate("requests");
    },

    // returns logged in user with settings model

    //TODO: populate needs to be reworked based off user ids
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({
          username: context.user.username,
        })
          .populate("settings")
          .populate({
            path: "requests",
            populate: { path: "sender" },
          });
      }
      throw new AuthenticationError("Please login to view your profile.");
    },
  },
  Mutation: {
    // login in user by authenticating credentials and update model to active
    login: async (parent, { email, password }) => {
      const user = await User.findOneAndUpdate(
        { email },
        { active: true },
        { new: true }
      );

      // authorization
      if (!user) {
        throw new AuthenticationError("Oops you entered the wrong credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Oops you entered the wrong credentials");
      }
      const token = signToken(user);

      // emit event for active users
      //TODO: replace array with user model search
      activeUsers.push(user);
      pubsub.publish("ACTIVE_USERS", {
        userActive: activeUsers,
      });

      return { token, user };
    },

    // logout user
    logout: async (parents, args, context) => {
      if (context.user) {
        await User.findOneAndUpdate(
          { username: context.user.username },
          { active: false },
          { new: true }
        );
      }
      // emit event for active users
      //TODO: replace array with user model search
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
        active: true,
      });

      const token = signToken(user);
      return { token, user };
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

    // sends friend request to pending
    sendFriendRequest: async (parent, { _id }, context) => {
      // TODO: stop double request from being sent

      if (context.user) {
        const request = await Request.create({
          sender: context.user._id,
          receiver: _id,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $push: {
              requests: request._id,
            },
          },
          {
            new: true,
          }
        );
        const user = await User.findByIdAndUpdate(
          { _id },
          {
            $push: {
              requests: request._id,
            },
          },
          {
            new: true,
          }
        );

        return user;
      }
      throw new AuthenticationError("Please log in");
    },

    // moves fiend request from pending to active
    acceptFriendRequest: async (parent, { userId, requestId }, context) => {
      if (context.user) {
        // the logged in user
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { requests: requestId }, $push: { friends: userId } },
          { new: true }
        );

        // The person who sent the friend request
        await User.findOneAndUpdate(
          { _id: userId },
          {
            $pull: { requests: requestId },
            $push: { friends: context.user._id },
          },
          { new: true }
        );

        return user;
      }
    },

    //TODO: create remove friend resolver

    /// creates a new message using sender id and emits MESSAGE CREATED event
    createMessage: async (parent, { text, receiverId }, context) => {
      pubsub.publish("MESSAGE_CREATED", {
        messages: { text, receiverId },
      });
      return Message.create(text, receiverId, { senderId: context.user._id }); //TODO: this resolver had not been tested
    },

    // finds a convo with participants or creates one
    createConvo: async (parent, { username }, context) => {
      // find a conversation with the logged in users id

      const convo = Conversation.findOne({ participants: username }); // TODO:perhaps this should search for all participants
      if (!convo) {
        Conversation.create({ participants: username });
      }
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
