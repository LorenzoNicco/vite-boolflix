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
        <!-- inizio sezione lingua -->
        <li v-if="store.movies.results[0].original_language == 'en'">Lingua:  <span class="fi fi-gb"></span></li>
        <li v-else>Lingua:  <span :class="'fi fi-'+store.movies.results[0].original_language"></span></li>
        <!-- fine sezione lingua -->
        <li>Voto: {{ store.movies.results[0].vote_average }}</li>
    </ul>

    <!-- collegamento cdn per bandiere -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"/>
</template>

<style scoped>

</style>