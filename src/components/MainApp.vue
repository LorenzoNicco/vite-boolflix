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
    <div v-if="store.movies.results == 0">
        <ul v-if="store.loaded == true">
            <li>Titolo: -</li>
            <li>Titolo originale: -</li>
            <li>Lingua:  -</li>
            <li>Voto: -</li>
        </ul>
    </div>
    <div v-else>
        <ul v-if="store.loaded == true">
            <li>Titolo: {{ store.movies.results[0].title }}</li>
            <li>Titolo originale: {{ store.movies.results[0].original_title }}</li>
            <li>Lingua:  <span :class="'fi fi-'+ store.movieLanguage"></span></li>
            <li>Voto: {{ store.movies.results[0].vote_average }}</li>
        </ul>
    </div>
    <!-- fine lista film ------------------------------------------------------------------------------------->

    <!-- inizio lista serie ------------------------------------------------------------------------------------->
    <div v-if="store.tvSeries.results == 0">
        <ul v-if="store.loaded == true">
            <li>Titolo: -</li>
            <li>Titolo originale: -</li>
            <!-- sezione lingua metodo 1 -->
            <!-- <li v-if="store.tvSeries.results[0].original_language == 'en'">Lingua:  <span class="fi fi-gb"></span></li>
            <li v-else>Lingua:  <span :class="'fi fi-'+store.tvSeries.results[0].original_language"></span></li> -->

            <!-- selezione lingua metodo 2 -->
            <li>Lingua:  -</li>
            <li>Voto: -</li>
        </ul>
    </div>
    <div v-else>
        <ul v-if="store.loaded == true">
            <li>Titolo: {{ store.tvSeries.results[0].name }}</li>
            <li>Titolo originale: {{ store.tvSeries.results[0].original_name }}</li>
            <!-- sezione lingua metodo 1 -->
            <!-- <li v-if="store.tvSeries.results[0].original_language == 'en'">Lingua:  <span class="fi fi-gb"></span></li>
            <li v-else>Lingua:  <span :class="'fi fi-'+store.tvSeries.results[0].original_language"></span></li> -->

            <!-- selezione lingua metodo 2 -->
            <li>Lingua:  <span :class="'fi fi-'+ store.tvLanguage"></span></li>
            <li>Voto: {{ store.tvSeries.results[0].vote_average }}</li>
        </ul>
    </div>
    <!-- fine lista serie ------------------------------------------------------------------------------------->

    <!-- collegamento cdn per bandiere -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"/>
</template>

<style scoped>

</style>