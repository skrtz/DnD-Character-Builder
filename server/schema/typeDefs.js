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
    stats: OutputStats
  }

  input characterInput {
    name: String!
    race: String
    image: String
    class: String
    background: String
    stats: InputStats
  }

  type OutputStats {
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
  }

  input InputStats {
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
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
    addUser(email: String, username: String, password: String): Auth
    login(email: String!, password: String!): Auth
    deleteCharacter(characterId: ID): User
    addCharacter(characterInput: characterInput): User
    updateCharacter(characterId: ID, characterInput: characterInput): User
  }
`;

module.exports = typeDefs;
