import { defineStore } from 'pinia'

export const useJokeStore = defineStore({
  id: 'joke',
  state: () => ({
      jokeArray: [],
      getJoke: null
  }),
  getters: {
    getJoke: (state) => state.getJoke
  },
  actions: {
      addJoke() {
          // Function to add a joke
      },
      getJokes() {
        // Get query here 
          // push to state array
      }
      
  }
})
