import { gql } from "@apollo/client";

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

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHAR = gql`
  mutation addChar($characterData: characterInput) {
    addCharacter(characterData: $characterData) {
      email
      username
      password
      characters {
        name
        race
        image
        class
        background
      }
    }
  }
`;

export const UPDATE_CHAR = gql`
  mutation updateChar($characterId: ID, $characterInput: characterInput) {
    updateCharacter(
      characterId: $characterId,
      characterInput: $characterInput
    ) {
      username
    }
  }
`;
