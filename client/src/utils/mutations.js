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
  mutation addChar($characterInput: characterInput) {
    addCharacter(characterInput: $characterInput) {
      email
      username
      password
      characters {
        name
        race
        image
        class
        background
<<<<<<< HEAD
        stats {
          strength
          dexterity
          constitution
          intelligence
          wisdom
          charisma
        }
=======
        strength
        dexterity
        constition
        intelligence
        wisdom
        charisma
>>>>>>> 9c1ef371e34a5719c4c7bee0706e6f5ec1fe01e8
        level
        hitPoints
        weapons
        alignment
        user {
          username
        }
        items
      }
    }
  }
`;

export const UPDATE_CHAR = gql`
  mutation updateChar($characterId: ID, $characterInput: characterInput) {
    updateCharacter(
      characterId: $characterId
      characterInput: $characterInput
    ) {
      username
    }
  }
`;

export const DELETE_CHAR = gql`
  mutation deleteChar($characterId: ID) {
    deleteCharacter(characterId: $characterId) {
      username
    }
  }
`;
