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
          for (let i = 0; i < this.store.movies.length; i++) {
            this.store.movies[i].active = false;
          }

          console.log("movies array", this.store.movies)
          console.log("response movies",response);
        }
        // selezione serie tv
        else {
          this.store.tvSeries = response.data.results
          for (let i = 0; i < this.store.tvSeries.length; i++) {
            this.store.tvSeries[i].active = false;
          }
          
          console.log("tvshow array", this.store.tvSeries)
          console.log("response tv",response);
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

<style lang="scss">
  @import "./style/main.scss";
</style>