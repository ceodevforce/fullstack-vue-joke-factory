<script setup lang="ts">
import { ref, reactive, watchEffect, onMounted } from "vue";
import useJoke from "../composables/useJoke";

const jokeObj = ref(null);
const question = ref("");
const punchline = ref("");
const { loading, jokes, getJokes, addJoke } = useJoke();

onMounted(() => {
    getJokes();
})


const addJokeSubmit = () => {
    // Launch modal for new joke
    console.log("addJokes")
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

watchEffect(() => {
    console.log(jokes.value)
})

</script>
<template>
    <div>
        <main>
            <div class="container">
                <h1>Jokes Feed</h1>

            </div>
            <section>
                <div class="row">
                    <div class="col-md-6" v-for="joke in jokes" :key="joke.id">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{ joke.question }}</h5>
                                <p class="card-text">{{ joke.punchline }}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Enter Joke Here</h5>
                                <div>
                                    <input type="text" class="form-control" v-model="question">
                                </div>
                                <div>
                                    <input type="text" class="form-control" v-model="punchline">
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary" @click="addJokeSubmit">Add Joke</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- <div>
            <button class="btn btn-primary" @click="addJokeSubmit">Add Jokes</button>
        </div> -->
        </main>
    </div>
</template>