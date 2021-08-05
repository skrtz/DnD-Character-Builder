const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Character {
        characterId: ID!
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
        character: [Character]
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
       
    }
    
    
    `

    module.exports = typeDefs