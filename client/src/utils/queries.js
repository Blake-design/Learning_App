import { gql } from "@apollo/client";

export const GET_THEME = gql`
  query GetTheme {
    theme @client
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      username
      email
      avatar
      bio
      requests {
        _id
        sender {
          _id
          username
          email
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

export const GET_ACTIVE_USERS = gql`
  subscription Subscription {
    userActive {
      username
    }
  }
`;
