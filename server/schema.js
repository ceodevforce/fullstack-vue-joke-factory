const { gql } = require('apollo-server')


const typeDefs = gql `
    type Query {
        jokesForHome: [Joke!]!
        getJoke(id: ID!): Joke
    }

    """ Type Joke """
     type Joke {
         id: ID
         "Joke returns a type String"
         joke: String
         punchline: String
    }


`;

module.exports = typeDefs