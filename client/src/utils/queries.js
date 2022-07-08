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
      friends {
        pending
        accepted
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
      name
      username
      email
      avatar
      bio
      createdAt
      friends {
        pending
        accepted
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
