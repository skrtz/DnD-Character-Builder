const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Character {
    characterId: ID!
    createdBy: String
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
    characterList: [Character]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(email: String, username: String, password: String): User
    login(email: String!, password: String!): Auth
    deleteCharacter(characterId: String): User
    addCharacter(characterData: characterInput): User
  }
`;

module.exports = typeDefs;
