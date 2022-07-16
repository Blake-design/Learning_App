import { gql } from "@apollo/client";

export const GET_THEME = gql`
  query GetTheme {
    theme @client
  }
`;

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      name
      username
      email
      avatar
      bio

      friends {
        _id
        username
        avatar
      }
      settings {
        _id
        theme
        showActive
        shareEmail
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      username
      active
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      name
      username
      email
      avatar
      bio
      createdAt
      requests {
        _id
        sender {
          _id
          username
        }
        receiver {
          _id
          username
        }
      }
      friends {
        _id
        username
      }
      settings {
        showActive
        shareEmail
      }
    }
  }
`;

export const QUERY_REQUESTS = gql`
  query Requests {
    requests {
      _id
      sender {
        _id
        username
      }
      receiver {
        _id
        username
      }
    }
  }
`;

export const QUERY_CONVOS = gql`
  query Convos {
    convos {
      _id
      roomName
    }
  }
`;

export const QUERY_MESSAGES = gql`
  query Messages($convoId: ID!) {
    messages(convoId: $convoId) {
      text
      senderId {
        _id
        username
        avatar
      }
      convoId
      createdAt
    }
  }
`;

export const GET_ACTIVE_USERS = gql`
  subscription UserActive {
    userActive {
      username
    }
  }
`;

export const SUBSCRIBE_MESSAGES = gql`
  subscription Message($convoId: ID!) {
    message(convoId: $convoId) {
      text
      senderId {
        _id
        username
      }
      convoId
      createdAt
    }
  }
`;
