import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        name
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const LOGOUT_USER = gql`
  mutation logout {
    logout {
      _id
      username
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser {
    removeUser {
      _id
      username
    }
  }
`;
export const UPDATE_USER = gql`
  mutation updateUser($bio: String, $name: String) {
    updateUser(bio: $bio, name: $name) {
      _id
      bio
      name
    }
  }
`;
export const SEND_REQUEST = gql`
  mutation sendFriendRequest($_id: ID!) {
    sendFriendRequest(_id: $_id) {
      _id
      username
      email
    }
  }
`;

export const ACCEPT_REQUEST = gql`
  mutation acceptFriendRequest($userId: ID!, $requestId: ID!) {
    acceptFriendRequest(userId: $userId, requestId: $requestId) {
      _id
      username
    }
  }
`;
export const CREATE_CONVO = gql`
  mutation createConvo($_id: ID!) {
    createConvo(_id: $_id) {
      roomName
      participants {
        _id
        username
      }
      groupAdmin {
        _id
        username
      }
      isGroupChat
    }
  }
`;
export const SEND_MESSAGE = gql`
  mutation SendMessage($convoId: ID!, $text: String!) {
    sendMessage(convoId: $convoId, text: $text) {
      text
      senderId
      convoId
    }
  }
`;
