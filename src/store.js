import { reactive } from "vue";

export const store = reactive ({
    researchedTitle: "",
    movies: [],
    tvSeries: [],
    loaded: false,
    tvLanguage: "",
    movieLanguage: ""
});