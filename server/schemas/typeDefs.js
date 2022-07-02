const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    userName: String
    email: String
    joined: String
    bio: String
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

  type Message {
    text: String!
    senderId: ID!
    receiverId: ID!
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Subscription {
    messages: [Message]
    userActive: [User]
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    settings: Settings
  }

  type Mutation {
    addUser(
      name: String!
      userName: String!
      email: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth
    logout: User
    removeUser: User
    updateUser(bio: String, name: String): User
    createMessage(text: String!, receiverId: ID!): Message
  }
`;

module.exports = typeDefs;
