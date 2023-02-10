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
            <h2>Movies</h2>

            <!-- carta placeholder -------------------------------------------------------------------->
            <div v-if="store.movies == 0"  class="card-no">
                <font-awesome-icon icon="fa-solid fa-face-frown" />

                <p>Titolo non presente</p>
            </div>
            <!-- carta principale -------------------------------------------------------------------->
            <div v-else class="card-container">
                <div class="card-yes"  v-for="movie in store.movies">
                    <div class="card-commons card-info">
                        <ul>
                            <li>
                                <h3>Titolo: {{ movie.title }}</h3>
                            </li>
                            <li v-show="movie.original_title != movie.title">
                                <h4>Titolo originale: {{ movie.original_title }}</h4>
                            </li>
                            <li><strong>Lingua:</strong>  <span :class="'fi fi-'+ store.languageControl(movie)"></span></li>

                            <!-- sezione voto -->
                            <li v-if="movie.vote_average == 0">Voto: N/A</li>
                            <li v-else><strong>Voto:</strong> 
                                <font-awesome-icon class="star-icon" v-for="n in store.voteConverter(movie)" icon="fa-solid fa-star" />
                                <font-awesome-icon class="star-icon" v-for="n in (5 - store.voteConverter(movie))" icon="fa-regular fa-star" />
                            </li>

                            <!-- sezione overview -->
                            <li v-if="movie.overview == ''"><strong>Overview:</strong> N/A</li>
                            <li v-else><strong>Overview:</strong> {{ movie.overview }}</li>
                        </ul>
                    </div>

                    <div class="card-commons card-poster">                        
                        <!-- sezione locandina -->
                        <img :src="'https://image.tmdb.org/t/p/w342'+ movie.poster_path" :alt="movie.title">
                    </div>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>
 @import "../style/partials/cardsStyle.scss";
</style>