const { AuthenticationError } = require("apollo-server-express");
const { query } = require("express");
const { ConnectionStates } = require("mongoose");
const { user } = require("../config/connection");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("Settings");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({
          userName: context.user.userName,
        });
        return user;
      }
      throw new AuthenticationError("Please login to view your profile.");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Wrong email/password");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Wrong email/password");
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
      if (context.user) {
        return User.findOneAndDelete({ userName: context.user.userName });
      }
      throw new AuthenticationError("Please log in");
    },
  },
};
module.exports = resolvers;
