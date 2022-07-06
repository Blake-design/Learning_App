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
  mutation sendFriendRequest($username: String!) {
    sendFriendRequest(username: $username)
  }
`;

export const ACCEPT_REQUEST = gql`
  mutation acceptFriendRequest($username: String!) {
    acceptFriendRequest(username: $username) {
      String
    }
  }
`;
