<script>
import { store } from "../store.js";

export default {
    name: "MainApp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <ul v-if="store.loaded == true">
        <li>Titolo: {{ store.movies.results[0].title }}</li>
        <li>Titolo originale: {{ store.movies.results[0].original_title }}</li>
        <li>Lingua: {{ store.movies.results[0].original_language }}</li>
        <li>Voto: {{ store.movies.results[0].vote_average }}</li>
    </ul>
</template>

<style scoped>

</style>