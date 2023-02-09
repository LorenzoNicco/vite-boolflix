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
        <MovieCards class="common-rules"/>

        <TvCards class="common-rules"/>
    </main>
</template>

<style lang="scss" scoped>
    main {
        height: 90vh;
        width: 100%;
        overflow-x: auto;
        background-color: gray;

        .common-rules {
            margin-bottom: 5rem;   
        }
    }
</style>