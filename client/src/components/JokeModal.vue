<script setup>

</script>
<template>
  <div>
    <section>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Enter Joke Here
              </h5>
              <div>
                <input
                  v-model="question"
                  type="text"
                  class="form-control"
                >
              </div>
              <div>
                <input
                  v-model="punchline"
                  type="text"
                  class="form-control"
                >
              </div>
            </div>
            <div class="card-footer">
              <button
                class="btn btn-primary"
                @click="addJoke"
              >
                Add Joke
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>