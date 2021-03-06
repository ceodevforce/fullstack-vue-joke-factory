// const jokes = [{

//     id: 1,
//     joke: 'What did the cheese say when it looked in the mirror?',
//     punchline: 'Hello-me (Halloumi)',
//     createdAt: '2020-01-01T00:00:00.000Z',
// }, {
//     id: 2,
//     joke: 'What kind of cheese do you use to disguise a small horse?',
//     punchline: 'Mask-a-pony (Mascarpone)',
//     createdAt: '2020-01-01T00:00:00.000Z',
// }, {
//     id: 3,
//     joke: "Knock Knock. Who’s there?",
//     punchline: 'Interrupt (Interrupting)',
//     createdAt: '2020-01-01T00:00:00.000Z',
// }, {
//     id: 4,
//     joke: "What do you call a fake noodle?",
//     punchline: 'An Impasta',
//     createdAt: '2020-01-01T00:00:00.000Z',
// }]



// Query: {
//     joke: () => jokes[0],
//     allJokes: () => jokes,
// },
// Mutation: {
//     addJoke: (parent, { joke, punchline }) => {
//         const newJoke = {
//             id: jokes.length + 1,
//             joke,
//             punchline,
//             createdAt: new Date(),
//         };
//         jokes.push(newJoke);
//         return newJoke;
//     },
// },

const resolvers = {
    Query: {
        jokesForHome: (parent, args, { dataSources }, info) => {
            return dataSources.jokeAPI.getJokesForHome()

        }
    }
}



module.exports = resolvers