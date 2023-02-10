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
      this.store.loaded = false;

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
        }
        // selezione serie tv
        else if (media == "tv"){
          this.store.tvSeries = response.data.results

          console.log("tvshow array", this.store.tvSeries)
          console.log("response tv",response);
        }

        // store loader
        this.store.loaded = true;
      });
      // chiamata per genere
      axios
      .get("https://api.themoviedb.org/3/genre/" + media + "/list", {
          params: {
          api_key: "44bbbe46a74e4cb360533140b122b63a"
          }
      })
      .then ((response) => {
          this.store.genre = response.data.genres;

          console.log("genre array", this.store.genre)
          console.log("response genre", response);
      });
    }
  }
}
</script>

<template>
  <HeaderApp @search="research('movie'), research('tv')"/>

  <MainApp />
</template>

<style lang="scss">
  @import "./style/main.scss";
</style>