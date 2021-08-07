const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Character {
    characterId: ID!
    createdBy: User
    name: String!
    race: String
    image: String
    class: String
    background: String
  }

  input characterInput {
    characterId: String
    name: String!
    race: String
    image: String
    class: String
    background: String
  }

  type User {
    _id: ID!
    username: String
    email: String
    password: String
    characterList: [Character!]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User

    # character: Character
    # userCharacters: characterList

  }

  type Mutation {
    addUser(email: String, username: String, password: String): User
    login(email: String!, password: String!): Auth
    deleteCharacter(characterId: String): User
    addCharacter(characterData: characterInput): User

    # updateCharacter(characterData: characterInput): User

  }
`;

module.exports = typeDefs;
