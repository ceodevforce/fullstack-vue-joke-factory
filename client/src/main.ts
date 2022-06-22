import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
// import { apolloClient } from './ApolloClient'
import { DefaultApolloClient } from '@vue/apollo-composable'
// import ApolloClient from 'apollo-boost'
import App from "./App.vue";
import router from "./router";





// const defaultClient = new ApolloClient({
//     uri: 'http://localhost:4500/'
// })


import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4500/',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.provide(DefaultApolloClient, apolloClient)

app.mount("#app");
