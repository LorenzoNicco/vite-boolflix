<script>
import { store } from "../store.js";

export default {
    name: "HeaderApp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <form action="" @submit.prevent="onSubmit">
        <input type="text" placeholder="Digita il titolo di un film"
         v-model="store.movieTitle"
        >

        <button type="submit" @click="$emit('search')">Search</button>
    </form>
</template>

<style scoped>

</style>