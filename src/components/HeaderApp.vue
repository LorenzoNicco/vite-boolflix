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
            font-weight: 700;

            &::after {
                content: "";
                position: absolute;
                height: 2.3rem;
                left: -25%;
                right: -25%;
                border-radius: 50%;
                bottom: -27px;
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