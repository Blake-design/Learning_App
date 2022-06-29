import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        name
        userName
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
        userName
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser {
    removeUser {
      _id
      userName
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
