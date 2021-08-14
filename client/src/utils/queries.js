import { gql } from "@apollo/client";

export const QUERY_ALL_CHAR = gql`
  query getAllCharacters {
    getAllCharacters {
      name
      image
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
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
export const QUERY_USER_CHAR = gql`
  query userCharacters {
    userCharacters {
      name
      race
      image
      class
      background
    }
  }
`;

export const QUERY_CHAR = gql`
query character($characterId: ID){
  character(characterId: $characterId){
    
    race
  }
}
`;
