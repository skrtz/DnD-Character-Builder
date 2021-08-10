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
    characters: [Character]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getAllCharacters: [Character]
    character(characterId: ID): Character
    userCharacters: [Character]
  }

  type Mutation {
    addUser(email: String, username: String, password: String): User
    login(email: String!, password: String!): Auth
    deleteCharacter(characterId: ID): User
    addCharacter(characterInput: characterInput): User
    updateCharacter(characterId: ID, characterInput: characterInput): User
  }
`;

module.exports = typeDefs;
