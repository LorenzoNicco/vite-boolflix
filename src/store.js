import { reactive } from "vue";

export const store = reactive ({
    movieTitle: "",
    movies: [],
    loaded: false
});