<script setup>
import { ref, reactive, watchEffect, onMounted } from "vue";
import { useJokeStore } from "./stores/joke";
import useJoke from "./composables/useJoke";
import { useRoute } from "vue-router";

const route = useRoute();
const { loading, jokes, getJokes } = useJoke();

onMounted(() => {
  getJokes();
})

const jokesReact = reactive(jokes);
const store = useJokeStore();

store.jokeArray.push(jokes);

//TODO: Add user logic to Pinia store


//TODO: Add jokes array to store


//TODO: Add features and transitions (pages)

watchEffect(() => { 
})
</script>

<template>
  <RouterView />
</template>

<style>
/* @import '@/assets/base.css'; */


</style>
