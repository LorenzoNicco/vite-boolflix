<script>
import { store } from "../store.js";

export default {
    name: "MovieCards",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
        <section v-if="store.loaded == true">
            <div v-if="store.movies == 0">
                <div class="card-no card-commons">
                    <ul>
                        <li>Titolo: -</li>
                        <li>Titolo originale: -</li>
                        <li>Lingua:  -</li>
                        <li>Voto: -</li>
                        <li>locandina: -</li>
                    </ul>
                </div>
            </div>
            <div v-else class="card-container">
                <div class="card-yes"  v-for="movie in store.movies">
                    <div class="card-commons card-info" v-show="movie.active == true" @click="movie.active = false">
                        <ul>
                            <li><strong>Titolo:</strong> {{ movie.title }}</li>
                            <li><strong>Titolo originale:</strong> {{ movie.original_title }}</li>
                            <li><strong>Lingua:</strong>  <span :class="'fi fi-'+ store.languageControl(movie)"></span></li>

                            <!-- sezione voto -->
                            <li v-if="movie.vote_average == 0">Voto: N/A</li>
                            <li v-else><strong>Voto:</strong> 
                                <font-awesome-icon v-for="number in store.voteConverter(movie)" icon="fa-solid fa-star" />
                                <font-awesome-icon v-for="number in (5 - store.voteConverter(movie))" icon="fa-regular fa-star" />
                            </li>
                        </ul>
                    </div>

                    <div class="card-commons" v-show="movie.active == false" @click="movie.active = true">                        
                        <!-- sezione locandina -->
                        <p v-if="movie.poster_path == null">Locandina: Non presente</p>
                        <img v-else :src="'https://image.tmdb.org/t/p/w342'+ movie.poster_path" alt="">
                    </div>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>
    .card-container {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;

        ul {
            list-style: none;
        }

        .card-commons {
            height: $cardHeigth;
            width: $cardWidth;
        }

        .card-info {
            padding: 4rem 0.5rem;
            background-color: black;
            color: white;
            border: 5px solid white;
        }
    }
</style>