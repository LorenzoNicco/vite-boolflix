<script>
import { store } from "../store.js";

export default {
    name: "MainApp",
    data() {
        return {
            store
        }
    },
    methods: {
        languageControl (media) {
            let language;

            if (media.original_language == 'en') {
            language = "gb";
            }
            else if (media.original_language == "ja") {
                language = "jp";
            }
            else {
                language = media.original_language;
            }

            return language
        }
    }
}
</script>

<template>
    <!-- inizio lista film ------------------------------------------------------------------------------------->
    <h2>Movies</h2>
    <section v-if="store.loaded == true">
        <div v-if="store.movies == 0">
            <ul>
                <li>Titolo: -</li>
                <li>Titolo originale: -</li>
                <li>Lingua:  -</li>
                <li>Voto: -</li>
                <li>locandina: -</li>
            </ul>
        </div>
        <div v-else>
            <ul v-for="movie in store.movies">
                <li>Titolo: {{ movie.title }}</li>
                <li>Titolo originale: {{ movie.original_title }}</li>
                <li>Lingua:  <span :class="'fi fi-'+ languageControl(movie)"></span></li>
                <li>Voto: {{ movie.vote_average }}</li>

                <!-- sezione locandina -->
                <li v-if="movie.poster_path == null">Locandina: Non presente</li>
                <li v-else>Locandina: <img :src="'https://image.tmdb.org/t/p/w92'+ movie.poster_path" alt=""></li>
            </ul>
        </div>
    </section>
    <!-- fine lista film ------------------------------------------------------------------------------------->

    <!-- inizio lista serie ------------------------------------------------------------------------------------->
    <h2>TV Shows</h2>
    <section v-if="store.loaded == true">
        <div v-if="store.tvSeries == 0">
            <ul>
                <li>Titolo: -</li>
                <li>Titolo originale: -</li>
                <li>Lingua:  -</li>
                <li>Voto: -</li>
                <li>Locandina: -</li>
            </ul>
        </div>
        <div v-else>
            <ul v-for="show in store.tvSeries">
                <li>Titolo: {{ show.name }}</li>
                <li>Titolo originale: {{ show.original_name }}</li>
                <li>Lingua:  <span :class="'fi fi-'+ languageControl(show)"></span></li>
                <li>Voto: {{ show.vote_average }}</li>

                <!-- sezione locandina -->
                <li v-if="show.poster_path == null">Locandina: Non presente</li>
                <li v-else>Locandina: <img :src="'https://image.tmdb.org/t/p/w92'+ show.poster_path" alt=""></li>
            </ul>
        </div>
    </section>
    <!-- fine lista serie ------------------------------------------------------------------------------------->
</template>

<style scoped>

</style>