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
          query: this.store.movieTitle
        }
      })
      .then ((response) => {
        this.store.movies = response.data
        console.log("movies array", this.store.movies)
        console.log("response",response);

        this.store.loaded = true;
      });
    }
  },
  // created() {
  //   axios
  //   .get("https://api.themoviedb.org/3/search/movie?api_key=44bbbe46a74e4cb360533140b122b63a", {
  //     params: {
  //       query: this.store.movieTitle
  //     }
  //   })
  //   .then ((response) => {
  //     console.log(response);
  //   });
  // }
}
</script>

<template>
  <HeaderApp @search="searchMovie"/>

  <MainApp />
</template>

<style>

</style>