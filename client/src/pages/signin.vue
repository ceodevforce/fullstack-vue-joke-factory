<script setup>
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
  <section>
    <div class="page-header min-vh-75">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
            <div class="card card-plain mt-8">
              <div class="card-header pb-0 text-left">
                <h3 class="font-weight-bolder text-info text-gradient">
                  Welcome back
                </h3>
                <p class="mb-0">
                  Enter your email and password to sign in
                </p>
              </div>
              <div class="card-body">
                <form>
                  <label>Email</label>
                  <div class="mb-3">
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      aria-label="Email"
                    >
                  </div>
                  <label>Password</label>
                  <div class="mb-3">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      aria-label="Password"
                    >
                  </div>
                  <div class="form-check form-switch">
                    <input
                      id="rememberMe"
                      class="form-check-input"
                      type="checkbox"
                      checked=""
                    >
                    <label
                      class="form-check-label"
                      for="rememberMe"
                    >Remember me</label>
                  </div>
                  <div class="text-center">
                    <button
                      type="button"
                      class="btn bg-gradient-info w-100 mt-4 mb-0"
                      @click="signIn"
                    >
                      Sign
                      in
                    </button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center pt-0 px-lg-2 px-1">
                <p class="mb-4 text-sm mx-auto">
                  Don't have an account?
                  <RouterLink
                    to="/signup"
                    class="text-info text-gradient font-weight-bold"
                  >
                    Sign up
                  </RouterLink>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
              <div
                class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                style="background-image:url('https://images.unsplash.com/photo-1527707471127-c3ad5ea438d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGpva2V8ZW58MHx8MHx8')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>