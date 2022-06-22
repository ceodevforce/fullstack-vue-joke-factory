<script>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light joke-bar">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">J-Factory</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li class="nav-item">
            <RouterLink to="/joke-feed" class="nav-link">J-Feed</RouterLink>
          </li>
           <li class="nav-item">
            <RouterLink to="/signup" class="nav-link">Signup</RouterLink>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.joke-bar {
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%),
    0 0 2px rgb(0 0 0 / 7%);
    background-color: #fff;
}
</style>
