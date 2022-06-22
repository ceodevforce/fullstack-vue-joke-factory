<script setup lang="ts">
import { ref, reactive } from 'vue'
// import { gql } from 'apollo-boost'
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'
/**
Query
*/
const jokeArray = ref(null)

const { result } = useQuery(gql`
  query getJokes{
    allJokes {
      id
      joke
      punchline
    }
  }
`)
// console.log(result.value)
// const { allJokes } = result
// console.log(allJokes)
// const jokeReactive = reactive(result)
// jokeArray.value = jokeReactive
// console.log(jokeReactive)

// console.log(jokeArray)

</script>
<template>
  <div>
    <div class="h-vh d-flex align-items-center justify-content-center">
      <div>
        <h1 class="display-1">Jokes Factory</h1>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-12">
              <div class="header-wrapper">
                <div class="header-content">
                  <h1 class="header-title">Unlimited Jokes</h1>
                  <p class="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row align-items-center mt-6">
            <div class="col-lg-6 col-12">
              <h1 class="title">See Jokes Here...</h1>
              <div v-if="result && result.allJokes">
                <div v-for="item in result.allJokes">Jokes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


