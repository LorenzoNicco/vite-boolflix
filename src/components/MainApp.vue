<script>
import { store } from "../store.js";

import MovieCards from "./MovieCards.vue";
import TvCards from "./TvCards.vue";

export default {
    name: "MainApp",
    data() {
        return {
            store
        }
    },
    components: {
        MovieCards,
        TvCards
    }
}
</script>

<template>
    <main>
        <!-- inizio lista film ------------------------------------------------------------------------------------->
        <h2>Movies</h2>

        <MovieCards />
        <!-- fine lista film ------------------------------------------------------------------------------------->

        <!-- inizio lista serie ------------------------------------------------------------------------------------->
        <h2>TV Shows</h2>

        <TvCards />
        <!-- fine lista serie ------------------------------------------------------------------------------------->
    </main>
</template>

<style lang="scss" scoped>
    main {
        height: 90vh;
        width: 100%;
        overflow-x: auto;
        background-color: gray;
    }
</style>