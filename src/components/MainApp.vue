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
        background: linear-gradient(0deg, rgba(48,48,48,1) 3%, rgba(25,25,25,1) 43%);

        .common-rules {
            margin-bottom: 5rem;   
        }
    }

    // scrollbar
    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 2px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #696969;
        cursor: pointer;
    }
</style>