<script>
import { store } from "../store.js";

import AppCard from "./AppCard.vue";

export default {
    name: "MainApp",
    data() {
        return {
            store,
            typeFilm: "movie",
            typeTv: "tv"
        }
    },
    components: {
        AppCard,
    }
}
</script>

<template>
    <main>
        <AppCard class="common-rules"
         :element="store.movies"
         :type="typeFilm"
        />

        <AppCard class="common-rules"
         :element="store.tvSeries"
         :type="typeTv"
        />
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