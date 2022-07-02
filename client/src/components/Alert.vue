<script setup lang="ts">
defineProps({

})
</script>
<template>
  <div class="container py-7 mt-3">
    <div class="row">
      <div
        class="alert alert-warning alert-dismissible text-white fade show"
        role="alert"
      >
        <strong>Joke Created</strong> 
        <button
          type="button"
          class="btn-close text-lg py-3 opacity-10"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>