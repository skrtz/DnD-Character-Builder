const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Character {
    characterId: ID!
    name: String!
    race: String
    image: String
    class: String
    background: String
    stats: OutputStats
    level: String
    hitPoints: String
    weapons: String
    alignment: String
    user: User
    items: String
  }

  input characterInput {
    name: String!
    race: String
    image: String
    class: String
    background: String
    stats: InputStats
    level: String
    hitPoints: String
    alignment: String
    items: String
    weapons: String
  }

  type OutputStats {
    strength: String
    dexterity: String
    constitution: String
    intelligence: String
    wisdom: String
    charisma: String
  }

  input InputStats {
    strength: String
    dexterity: String
    constitution: String
    intelligence: String
    wisdom: String
    charisma: String
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
