const { ApolloServer, gql } = require('apollo-server');
const JokesAPI = require('./datasources/jokes-api')
const resolvers = require('./resolvers')
const typeDefs = require('./schema')
require('dotenv').config()
    // const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URI, {}).then(() => {
//     console.log("Connected")
// })


// const typeDefs = gql `
//     type Joke {
//         id: ID
//         joke: String
//         punchline: String
//     }

//     type Query {
//         joke: Joke
//         allJokes: [Joke]
//     }

//     type Mutation {
//         addJoke(joke: String!, punchline: String!): Joke
//         deleteJoke(id: ID!): Joke
//         updateJoke(id: ID!, joke: String!, punchline: String!): Joke
//     }
// `;




const server = new ApolloServer({
    typeDefs,
    resolvers,
    cache: "bounded",
    dataSources: () => {
        return {
            jokeAPI: new JokesAPI
        }
    }
});

server.listen(4500).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})