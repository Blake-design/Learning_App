const { gql } = require("apollo-server-express");

//TODO: create fragments to clean up redundancies
//TODO:modularize queries
const typeDefs = gql`
  type User {
    _id: ID
    name: String
    username: String
    email: String
    createdAt: String
    bio: String
    active: Boolean
    avatar: String
    settings: Settings
    friends: [User]
    requests: [Request]
    convos: [Conversation]
  }

  type Request {
    _id: ID
    sender: User
    receiver: User
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
    convoId: ID!
    createdAt: String!
  }

  type Conversation {
    _id: ID
    roomName: String
    participants: [User]
    lastMessage: Message
    groupAdmin: User
    isGroupChat: Boolean
  }

  type ActiveUsers {
    active: [User]
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Subscription {
    messages: Message
    userActive: [User]
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    settings: Settings
    friends: User
    requests: [Request]
    convos: [Conversation]
    messages(convoId: ID!): [Message]
  }

  type Mutation {
    addUser(
      name: String!
      user: String!
      email: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth
    logout: User
    removeUser: User
    updateUser(bio: String, name: String): User
    sendFriendRequest(_id: ID!): User
    acceptFriendRequest(userId: ID!, requestId: ID!): User
    sendMessage(text: String!, convoId: ID!): Message
    createConvo(_id: ID!): Conversation
  }
`;

module.exports = typeDefs;
