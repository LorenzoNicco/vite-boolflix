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
    research (media) {
      axios
      .get("https://api.themoviedb.org/3/search/" + media, {
        params: {
          api_key: "44bbbe46a74e4cb360533140b122b63a",
          query: this.store.researchedTitle,
          language: "it-IT"
        }
      })
      .then ((response) => {
        // selezione film
        if (media == "movie") {
          this.store.movies = response.data.results
          console.log("movies array", this.store.movies)
          console.log("response movies",response);
          
          // selezione linguaggio (in alternativa: v-if in MainApp)
          if (store.movies[0].original_language == 'en') {
            this.store.movieLanguage = "fi fi-gb";
          }
          else if (store.movies[0].original_language == "ja") {
            this.store.movieLanguage = "fi fi-jp";
          }
          else {
            this.store.movieLanguage = "fi fi-" + store.movies[0].original_language;
          }
        }
        // selezione serie tv
        else {
          this.store.tvSeries = response.data.results
          console.log("tvshow array", this.store.tvSeries)
          console.log("response tv",response);

          // selezione linguaggio (in alternativa: v-if in MainApp)
          if (store.tvSeries[0].original_language == 'en') {
            this.store.tvLanguage = "gb";
          }
          else if (store.tvSeries[0].original_language == "ja") {
            this.store.tvLanguage = "jp";
          }
          else {
            this.store.tvLanguage = store.tvSeries[0].original_language;
          }
        }

        // store loader
        this.store.loaded = true;
      });
    }
  }
}
</script>

<template>
  <HeaderApp @search="research('movie'), research('tv')"/>

  <MainApp />
</template>

<style>

</style>