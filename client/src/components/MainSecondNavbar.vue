<script setup lang="ts">
import { ref, reactive, watchEffect, onMounted } from "vue";
import { RouterLink } from 'vue-router'
import { useRouter, useRoute } from "vue-router";


import useSupabaseUser from "../composables/useSupabaseUser";

const router = useRouter(); 
const route = useRoute();

const { user } = useSupabaseUser();
console.log(user)

watchEffect(() => {
  console.log(user)
  
})
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <nav
          class="navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div class="container-fluid px-0">
            <RouterLink to="/" class="navbar-brand font-weight-bolder ms-sm-3" rel="tooltip" title="Joke Factory"
              data-placement="bottom">
              Joke Factory
            </RouterLink>
            <a class="btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block">SignUp</a>
            <button class="navbar-toggler shadow-none ms-md-2" type="button" data-bs-toggle="collapse"
              data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
              <ul class="navbar-nav navbar-nav-hover mx-auto">
                <li class="nav-item dropdown dropdown-hover mx-2" v-if="user">
                  <a role="button"
                    class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                    <RouterLink class="nav-link" to="/joke-feed">
                      Feed
                    </RouterLink>
                  </a>
                </li>
                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a role="button"
                    class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                    <RouterLink class="nav-link" to="/signup">
                      About
                    </RouterLink>
                  </a>
                </li>
              </ul>
              <div v-if="!user">
                <ul class="navbar-nav d-lg-block d-none">
                  <li class="nav-item">

                    <RouterLink to="/signup" class="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1">
                      Signup
                    </RouterLink>

                  </li>

                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item">

                    <RouterLink to="/signin" class="btn btn-sm  bg-gradient-primary  btn-round mb-0">
                      Signin
                    </RouterLink>

                  </li>
                </ul>
              </div>
              <div v-else>
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">

                    <RouterLink to="/profile" class="nav-link pe-5">
                      Profile
                    </RouterLink>

                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>

      </div>
    </div>
  </div>
</template>
<style scoped>
a {
  color: inherit
}
</style>