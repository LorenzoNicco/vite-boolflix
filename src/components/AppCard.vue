<script>
import { store } from "../store.js";
import axios from "axios";

export default {
    name: "AppCard",
    data() {
        return {
            store
        }
    },
    props: {
        element: Object,
        type: String
    },
    methods: {
        languageControl (media) {
            let language;

            if (media.original_language == 'en') {
                language = "gb";
            }
            else if (media.original_language == "ja") {
                language = "jp";
            }
            else if (media.original_language == "es") {
                language = "sp";
            }
            else {
                language = media.original_language;
            }

            return language
        },
        voteConverter (media) {
            let voteToFive = Math.ceil(media.vote_average / 2);

            return voteToFive;
        },
        researchActors(id) {
            axios
            .get("https://api.themoviedb.org/3/search/" + this.type + "/" + id + "/credits", {
                params: {
                api_key: "44bbbe46a74e4cb360533140b122b63a"
                }
            })
            .then ((response) => {
                this.store.credits = response.data.results

                console.log("credits array", this.store.credits)
                console.log("response credits",response);
            });
            console.log("chiamata", "https://api.themoviedb.org/3/search/" + this.type + "/" + id + "/credits");
        }
    }
}
</script>

<template>
        <section v-if="store.loaded == true">
            <h2 v-if="element == store.movies">Movies</h2>
            <h2 v-else-if="element == store.tvSeries">TV Series</h2>

            <!-- carta placeholder -------------------------------------------------------------------->
            <div v-if="element == 0"  class="card-no">
                <font-awesome-icon icon="fa-solid fa-face-frown" />

                <p>Titolo non presente</p>
            </div>
            <!-- carta principale -------------------------------------------------------------------->
            <div v-else class="card-container">
                <div class="card-yes"  v-for="item in element">
                    <div class="card-commons card-info">
                        <ul>
                            <li>
                                <h3>Titolo: {{ item.title || item.name }}</h3>
                            </li>
                            <li v-show="(item.original_title != item.title) || (item.original_name != item.name)">
                                <h4>Titolo originale: {{ item.original_title || item.original_name }}</h4>
                            </li>
                            <li><strong>Lingua:</strong>  <span :class="'fi fi-'+ languageControl(item)"></span></li>

                            <!-- sezione voto -->
                            <li v-if="item.vote_average == 0">Voto: N/A</li>
                            <li v-else><strong>Voto:</strong> 
                                <font-awesome-icon class="star-icon" v-for="n in voteConverter(item)" icon="fa-solid fa-star" />
                                <font-awesome-icon class="star-icon" v-for="n in (5 - voteConverter(item))" icon="fa-regular fa-star" />
                            </li>

                            <!-- sezione overview -->
                            <li v-if="item.overview == ''"><strong>Overview:</strong> N/A</li>
                            <li v-else><strong>Overview:</strong> {{ item.overview }}</li>

                            <button @click="researchActors(item.id)">Più info</button>

                            <!-- <li><strong>Generi:  </strong>
                                <span v-for="genere in item.genre_ids">{{ genere.name }}</span>
                            </li> -->
                        </ul>
                    </div>

                    <div class="card-commons card-poster">                        
                        <!-- sezione locandina -->
                        <img :src="'https://image.tmdb.org/t/p/w342'+ item.poster_path" :alt="item.title || item.name">
                    </div>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>
 @import "../style/partials/cardsStyle.scss";
</style>