import { gql } from "@apollo/client";

export const GET_THEME = gql`
  query GetTheme {
    theme @client
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      name
      username
      email
      avatar
      bio
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

export const QUERY_SINGLE_USERS = gql`
  query user($username: String!) {
    user(username: $username) {
      name
      username
      email
      avatar
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
