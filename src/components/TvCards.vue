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
            <h2>TV Shows</h2>

            <!-- carta placeholder -------------------------------------------------------------------->
            <div v-if="store.tvSeries == 0"  class="card-no">
                <font-awesome-icon class="sad-face-icon" icon="fa-solid fa-face-frown" />
                
                <p>Titolo non presente</p>
            </div>
            <!-- carta principale -------------------------------------------------------------------->
            <div v-else class="card-container">
                <div class="card-yes"  v-for="show in store.tvSeries">
                    <div class="card-commons card-info">
                        <ul>
                            <li><strong>Titolo:</strong> {{ show.name }}</li>
                            <li v-show="show.original_name != show.name"><strong>Titolo originale:</strong> {{ show.original_name }}</li>
                            <li><strong>Lingua:</strong>  <span :class="'fi fi-'+ store.languageControl(show)"></span></li>

                            <!-- sezione voto -->
                            <li v-if="show.vote_average == 0">Voto: N/A</li>
                            <li v-else><strong>Voto:</strong> 
                                <font-awesome-icon class="star-icon" v-for="number in store.voteConverter(show)" icon="fa-solid fa-star" />
                                <font-awesome-icon class="star-icon" v-for="number in (5 - store.voteConverter(show))" icon="fa-regular fa-star" />
                            </li>

                            <!-- sezione overview -->
                            <li v-if="show.overview == ''"><strong>Overview:</strong> N/A</li>
                            <li v-else><strong>Overview:</strong> {{ show.overview }}</li>
                        </ul>
                    </div>

                    <div class="card-commons card-poster">                        
                        <!-- sezione locandina -->
                        <img :src="'https://image.tmdb.org/t/p/w342'+ show.poster_path" :alt="show.name">
                    </div>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>
 @import "../style/partials/cardsStyle.scss";
</style>