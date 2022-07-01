<script setup lang="ts">
import { ref, reactive, watchEffect, onMounted } from "vue";
import useFoo from "../composables/useFoo";
import { useJokeStore } from "../stores/joke";


//TODO: Add user logic to Pinia store


//TODO: Add jokes array to store




</script>
<template>
  <main class="px-3 text-white">
    <div>
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
              <!-- <div v-if="result && result.jokesForHome">
                <div v-for="item in result.jokesForHome">
                  <h1>
                    {{ item.joke }}
                  </h1>
                  <p>{{ item.punchline }}</p>
                </div>
              </div> -->

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
