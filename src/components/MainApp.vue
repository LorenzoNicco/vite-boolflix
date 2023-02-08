<script>
import { store } from "../store.js";

export default {
    name: "MainApp",
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <!-- inizio lista film ------------------------------------------------------------------------------------->
    <h2>Movies</h2>
    <div v-if="store.movies.results == 0">
        <ul v-if="store.loaded == true">
            <li>Titolo: -</li>
            <li>Titolo originale: -</li>
            <li>Lingua:  -</li>
            <li>Voto: -</li>
            <li>locandina: -</li>
        </ul>
    </div>
    <div v-else>
        <ul v-if="store.loaded == true">
            <li>Titolo: {{ store.movies.results[0].title }}</li>
            <li>Titolo originale: {{ store.movies.results[0].original_title }}</li>
            <li>Lingua:  <span :class="'fi fi-'+ store.movieLanguage"></span></li>
            <li>Voto: {{ store.movies.results[0].vote_average }}</li>

            <!-- sezione locandina -->
            <li v-if="store.movies.results[0].poster_path == null">Locandina: Non presente</li>
            <li v-else>Locandina: <img :src="'https://image.tmdb.org/t/p/w92'+ store.movies.results[0].poster_path" alt=""></li>
        </ul>
    </div>
    <!-- fine lista film ------------------------------------------------------------------------------------->

    <!-- inizio lista serie ------------------------------------------------------------------------------------->
    <h2>TV Shows</h2>
    <div v-if="store.tvSeries.results == 0">
        <ul v-if="store.loaded == true">
            <li>Titolo: -</li>
            <li>Titolo originale: -</li>
            <li>Lingua:  -</li>
            <li>Voto: -</li>
            <li>Locandina: -</li>
        </ul>
    </div>
    <div v-else>
        <ul v-if="store.loaded == true">
            <li>Titolo: {{ store.tvSeries.results[0].name }}</li>
            <li>Titolo originale: {{ store.tvSeries.results[0].original_name }}</li>
            <li>Lingua:  <span :class="'fi fi-'+ store.tvLanguage"></span></li>
            <li>Voto: {{ store.tvSeries.results[0].vote_average }}</li>

            <!-- sezione locandina -->
            <li v-if="store.tvSeries.results[0].poster_path == null">Locandina: Non presente</li>
            <li v-else>Locandina: <img :src="'https://image.tmdb.org/t/p/w92'+ store.tvSeries.results[0].poster_path" alt=""></li>
        </ul>
    </div>
    <!-- fine lista serie ------------------------------------------------------------------------------------->

    <!-- collegamento cdn per bandiere -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"/>
</template>

<style scoped>

</style>