<script>
import { store } from "../store.js";

import AppCard from "./AppCard.vue";

export default {
    name: "MainApp",
    data() {
        return {
            store
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
        />

        <AppCard class="common-rules"
         :element="store.tvSeries"
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