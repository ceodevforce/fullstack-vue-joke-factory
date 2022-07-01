<script setup lang="ts">

</script>
<template>
    <div>
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
                            <button class="btn btn-primary" @click="addJoke">Add Joke</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>