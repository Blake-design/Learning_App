const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    joined: String
    active: Boolean
    avatar: String
    settings: Settings
  }

  type Settings {
    _id: ID
    theme: String
    showActive: Boolean
    shareEmail: Boolean
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    settings: Settings
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      userName: String!
      email: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth
    removeUser: User
  }
`;

module.exports = typeDefs;
