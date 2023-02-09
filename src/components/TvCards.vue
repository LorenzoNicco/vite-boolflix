<script>
import { store } from "../store.js";

export default {
    name: "TvCards",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
        <section v-if="store.loaded == true">
            <div v-if="store.tvSeries == 0">
                <div class="card-no">
                    <ul>
                        <li>Titolo: -</li>
                        <li>Titolo originale: -</li>
                        <li>Lingua:  -</li>
                        <li>Voto: -</li>
                        <li>locandina: -</li>
                    </ul>
                </div>
            </div>
            <div v-else>
                <div class="card-yes" v-for="show in store.tvSeries">
                    <ul>
                        <li>Titolo: {{ show.name }}</li>
                        <li>Titolo originale: {{ show.original_name }}</li>
                        <li>Lingua:  <span :class="'fi fi-'+ store.languageControl(show)"></span></li>

                        <!-- sezione voto -->
                        <li v-if="show.vote_average == 0">Voto: N/A</li>
                        <li v-else>Voto: 
                            <font-awesome-icon v-for="number in store.voteConverter(show)" icon="fa-solid fa-star" />
                            <font-awesome-icon v-for="number in (5 - store.voteConverter(show))" icon="fa-regular fa-star" />
                        </li>

                        <!-- sezione locandina -->
                        <li v-if="show.poster_path == null">Locandina: Non presente</li>
                        <li v-else>Locandina: <img :src="'https://image.tmdb.org/t/p/w92'+ show.poster_path" alt=""></li>
                    </ul>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>

</style>