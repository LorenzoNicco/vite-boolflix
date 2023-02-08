<script>
import { store } from "./store.js";
import axios from "axios";

import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";

export default {
  data() {
    return {
      store
    }
  },
  components: {
    HeaderApp,
    MainApp
  },
  methods: {
    searchMovie() {
      axios
      .get("https://api.themoviedb.org/3/search/movie?api_key=44bbbe46a74e4cb360533140b122b63a", {
        params: {
          query: this.store.researchedTitle
        }
      })
      .then ((response) => {
        this.store.movies = response.data
        console.log("movies array", this.store.movies)
        console.log("response movies",response);
        
        // selezione linguaggio
        if (store.movies.results[0].original_language == 'en') {
          this.store.movieLanguage = "fi fi-gb";
        }
        else if (store.movies.results[0].original_language == "ja") {
          this.store.movieLanguage = "fi fi-jp";
        }
        else {
          this.store.movieLanguage = "fi fi-" + store.movies.results[0].original_language;
        }

        // store loader
        this.store.loaded = true;
      });
    },
    searchTvSeries() {
      axios
      .get("https://api.themoviedb.org/3/search/tv?api_key=44bbbe46a74e4cb360533140b122b63a", {
        params: {
          query: this.store.researchedTitle
        }
      })
      .then ((response) => {
        this.store.tvSeries = response.data
        console.log("tvshow array", this.store.tvSeries)
        console.log("response tv",response);

        // selezione linguaggio
        if (store.tvSeries.results[0].original_language == 'en') {
          this.store.tvLanguage = "fi fi-gb";
        }
        else if (store.tvSeries.results[0].original_language == "ja") {
          this.store.tvLanguage = "fi fi-jp";
        }
        else {
          this.store.tvLanguage = "fi fi-" + store.tvSeries.results[0].original_language;
        }

        // store loader
        this.store.loaded = true;
      });
    }
  }
}
</script>

<template>
  <HeaderApp @search="searchMovie(), searchTvSeries()"/>

  <MainApp />
</template>

<style>

</style>