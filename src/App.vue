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
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "44bbbe46a74e4cb360533140b122b63a",
          query: this.store.researchedTitle,
          language: "it-IT"
        }
      })
      .then ((response) => {
        this.store.movies = response.data
        console.log("movies array", this.store.movies)
        console.log("response movies",response);
        
        // selezione linguaggio (in alternativa: v-if in MainApp)
        if (store.movies.results[0].original_language == 'en') {
          this.store.movieLanguage = "fi fi-gb";
        }
        else if (store.movies.results[0].original_language == "ja") {
          this.store.movieLanguage = "fi fi-jp";
        }
        else {
          this.store.movieLanguage = "fi fi-" + store.movies.results[0].original_language;
        }
        // this.languageSelector(this.store.movies.results[0].original_language, this.store.movieLanguage);

        // store loader
        this.store.loaded = true;
      });
    },
    searchTvSeries() {
      axios
      .get("https://api.themoviedb.org/3/search/tv?", {
        params: {
          api_key: "44bbbe46a74e4cb360533140b122b63a",
          query: this.store.researchedTitle,
          language: "it-IT"
        }
      })
      .then ((response) => {
        this.store.tvSeries = response.data
        console.log("tvshow array", this.store.tvSeries)
        console.log("response tv",response);

        // selezione linguaggio (in alternativa: v-if in MainApp)
        if (store.tvSeries.results[0].original_language == 'en') {
          this.store.tvLanguage = "gb";
        }
        else if (store.tvSeries.results[0].original_language == "ja") {
          this.store.tvLanguage = "jp";
        }
        else {
          this.store.tvLanguage = store.tvSeries.results[0].original_language;
        }

        // this.languageSelector(this.store.tvSeries.results[0].original_language, this.store.tvLanguage);
        // store loader
        this.store.loaded = true;
      });
    },
    // languageSelector(media, language) {
    //   if (media == 'en') {
    //     language = "gb";
    //   }
    //   else if (media == "ja") {
    //     language = "jp";
    //   }
    //   else {
    //     language = media;
    //   }
    // }
  }
}
</script>

<template>
  <HeaderApp @search="searchMovie(), searchTvSeries()"/>

  <MainApp />
</template>

<style>

</style>