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
            <div v-if="store.movies == 0"  class="card-no card-commons">
                <ul>
                    <li>Titolo: -</li>
                    <li>Titolo originale: -</li>
                    <li>Lingua:  -</li>
                    <li>Voto: -</li>
                    <li>locandina: -</li>
                </ul>
            </div>
            <div v-else class="card-container">
                <div class="card-yes"  v-for="movie in store.movies">
                    <div class="card-commons card-info">
                        <ul>
                            <li><strong>Titolo:</strong> {{ movie.title }}</li>
                            <li><strong>Titolo originale:</strong> {{ movie.original_title }}</li>
                            <li><strong>Lingua:</strong>  <span :class="'fi fi-'+ store.languageControl(movie)"></span></li>

                            <!-- sezione voto -->
                            <li v-if="movie.vote_average == 0">Voto: N/A</li>
                            <li v-else><strong>Voto:</strong> 
                                <font-awesome-icon class="star-icon" v-for="number in store.voteConverter(movie)" icon="fa-solid fa-star" />
                                <font-awesome-icon class="star-icon" v-for="number in (5 - store.voteConverter(movie))" icon="fa-regular fa-star" />
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
    .card-container {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;

        ul {
            list-style: none;

            li {
                line-height: 1.5rem;
            }
        }

        .card-yes {
            margin-right: 2rem;
            position: relative;

            .card-info {
            padding: 4rem 0.5rem;
            background-color: black;
            color: white;
            border: 5px solid white;
            overflow-y: auto;

                .star-icon {
                    color: yellow;
                }
            }

            .card-poster {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 20;
                background-color: black;
                border: 5px solid white;

                img {
                    height: 100%;
                    color: white;
                }
            }

            &:hover .card-poster{
                display: none;
            }
        }

        .card-commons {
            height: $cardHeigth;
            width: $cardWidth;
        }
    }
</style>