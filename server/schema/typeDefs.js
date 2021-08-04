const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        character: [Character]
    }
    
    type Character {
        characterId: ID!
        name: String!
        race: String
        class: String
        background: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addUser:
        login(email: String!, password: String!): Auth
        createCharacter:
        deleteCharacter:
        
    }
    
    
    `