const { RESTDataSource } = require("apollo-datasource-rest");
const supabase = require('../supabase')


class JokesAPI extends RESTDataSource {
    constructor() {
        super();
    }

    async getJokeByFiltering(singleJoke) {
        const { id, joke, punchline } = joke
        const { data, error } = await supabase.from('joke').select()
    }
    async getJokesForHome() {
        let { data, error } = await supabase.from('joke').select('*')
        if (error) throw new Error('Data not found')
        return data
    }

    async updateJokes(joke) {
        const { data, error } = await supabase.from('joke').update({

        })
    }

    async deleteJokeFromHome(id) {
        const { data, error } = await supabase.from('joke').delete().eq(id)
    }
}

module.exports = JokesAPI