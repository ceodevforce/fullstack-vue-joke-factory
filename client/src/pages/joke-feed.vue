<script setup>
import { ref, reactive, watchEffect, onMounted } from "vue";
import useJoke from "@/composables/useJoke";

const jokeObj = ref(null);
const question = ref("");
const punchline = ref("");
const { loading, jokes, getJokes, addJoke } = useJoke();

onMounted(() => {
    getJokes();
})


const addJokeSubmit = () => {
    // Launch modal for new joke
    jokeObj.value = {
        question: question.value,
        punchline: punchline.value
    }
    console.log(jokeObj)
    addJoke(jokeObj.value);
    question.value = "";
    punchline.value = "";
    //TODO: fire of a notification that the joke has been added
    // update the joke list
}



</script>
<template>
  <div>
    <main class="mt-8">
      <div class="container text-center">
        <h1>Jokes Feed</h1>
      </div>
      <section>
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
              <div class="card d-flex justify-content-center p-4 shadow-lg">
                <div class="text-center">
                  <h3 class="text-gradient text-primary">
                    Add Jokes Here
                  </h3>
                  <p class="mb-0">
                    Please add jokes that can be used in the Joke Factory.
                  </p>
                </div>
                <div class="card card-plain">
                  <form
                    id="joke-form"
                    role="form"
                    method="post"
                    autocomplete="off"
                  >
                    <div class="card-body pb-2">
                      <div class="row">
                        <div class="col-md-12">
                          <label>Joke</label>
                          <div class="input-group mb-4">
                            <input
                              v-model="question"
                              class="form-control"
                              placeholder="Enter Joke"
                              aria-label="Joke"
                              type="text"
                            >
                          </div>
                        </div>
                      </div>
                      <div class="form-group mb-0 mt-md-0 mt-4">
                        <label>Give us the punchline</label>
                        <textarea
                          id="punchline"
                          name="punchline"
                          class="form-control"
                          rows="6"
                          placeholder="Hit us with the punchline"
                        />
                      </div>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <button
                            type="submit"
                            class="btn bg-gradient-primary mt-3 mb-0"
                            @click="addJokeSubmit"
                          >
                            Add Joke
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-6 bg-gray-100">
        <div class="container">
          <div class="row">
            <div
              v-for="joke in jokes"
              :key="joke.id"
              class="col-lg-4 mb-lg-0 mb-4 mt-4"
            >
              <div class="card">
                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                  <a
                    href="javascript:;"
                    class="d-block"
                  >
                    <img
                      src="https://i.pinimg.com/originals/f3/81/1d/f3811d78a8f096de1b59a7d9af7905d2.jpg"
                      class="img-fluid border-radius-lg"
                    >
                  </a>
                </div>

                <div class="card-body pt-3">
                  <span
                    class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2"
                  >Category</span>
                  <a
                    href="javascript:;"
                    class="card-title h5 d-block text-darker"
                  >
                    {{ joke.question }}
                  </a>
                  <p class="card-description mb-4">
                    {{ joke.punchline }}
                  </p>
                  <div class="author align-items-center">
                    <img
                      src=""
                      alt="..."
                      class="avatar shadow"
                    >
                    <div class="name ps-3">
                      <span>Mathew Glock</span>
                      <div class="stats">
                        <small>Posted on 28 February</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>