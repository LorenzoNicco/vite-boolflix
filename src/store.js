import { reactive } from "vue";

export const store = reactive ({
    researchedTitle: "",
    movies: [],
    tvSeries: [],
    cast: [],
    genre: [],
    loaded: false,
    infoLoader: false,
    genreSelected: ""
});