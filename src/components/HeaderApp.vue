<script>
import { store } from "../store.js";

export default {
    name: "HeaderApp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>

        <form action="" @submit.prevent="onSubmit">
            <input type="text" placeholder="Digita un titolo"
            v-model="store.researchedTitle"
            @keyup.enter="$emit('search')"
            >
        </form>
    </header>
</template>

<style  lang="scss" scoped>
    header {
        height: 10vh;
        width: 100%;
        background-color: black;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            color: red;
            position: relative;
            overflow: hidden;

            &::after {
                content: "";
                position: absolute;
                height: 2.1rem;
                left: -10%;
                right: -10%;
                border-radius: 50%;
                bottom: -24px;
                background: black;
            }
        }

        input {
            height: 2rem;
            border-radius: 5px;
            border: none;
            padding: 5px;
        }
    }

</style>