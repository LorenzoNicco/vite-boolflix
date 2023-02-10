import { reactive } from "vue";

export const store = reactive ({
    researchedTitle: "",
    movies: [],
    tvSeries: [],
    credits: [],
    loaded: false,
});