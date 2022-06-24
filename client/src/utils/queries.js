import { gql } from "@apollo/client";

const GET_THEME = gql`
  query GetTheme {
    theme @client
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      firstName
      lastName
      userName
      email
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      firstName
      lastName
      userName
      joined
    }
  }
`;

export const QUERY_SINGLE_USERS = gql`
  query user($userName: String!) {
    user(userName: $userName) {
      firstName
      lastName
      userName
      email
    }
  }
`;
