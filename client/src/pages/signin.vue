<script setup lang="ts">
import { ref, reactive, watchEffect, onMounted } from "vue";
import useSupabaseUser from "../composables/useSupabaseUser";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const { loading, error, newUser, existingUser, userSignIn} = useSupabaseUser();

const signIn = () => {
    userSignIn(email.value, password.value);
    router.push("/joke-feed");
};
</script>
<template>
    <div>
        <div class="mx-auto">
            <h1>Sign-In</h1>
        </div>
        <main class="w-100 m-auto">
            <form>
                <img class="mb-4"
                    src="https://images.unsplash.com/photo-1621265054041-e90cefa414a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8am9rZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                    alt="">
                <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
                <div class="formFloats">
                    <label for="inputEmail">Email address</label>
                    <input id="floatInput" class="form-control" type="email" placeholder="Email Here" v-model="email">
                </div>
                <div class="formFloats">
                    <label for="inputPassword">Enter Password</label>
                    <input id="floatPassword" class="form-control" type="password" placeholder="Email Here"
                        v-model="password">
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="button" @click="signIn">Sign In</button>
            </form>
        </main>
        
    </div>
</template>