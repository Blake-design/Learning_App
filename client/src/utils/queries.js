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
      userName
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
      userName
      active
    }
  }
`;

export const QUERY_SINGLE_USERS = gql`
  query user($userName: String!) {
    user(userName: $userName) {
      name
      userName
      email
      avatar
    }
  }
`;

export const GET_USER_ACTIVE = gql`
  subscription Subscription {
    userActive {
      userName
    }
  }
`;
