import { reactive } from "vue";

export const store = reactive ({
    researchedTitle: "",
    movies: [],
    tvSeries: [],
    loaded: false,
    languageControl (media) {
        let language;

        if (media.original_language == 'en') {
            language = "gb";
        }
        else if (media.original_language == "ja") {
            language = "jp";
        }
        else {
            language = media.original_language;
        }

        return language
    },
    voteConverter (media) {
        let voteToFive = Math.ceil(media.vote_average / 2);

        return voteToFive;
    }
});