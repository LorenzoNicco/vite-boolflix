<script>
import { store } from "../store.js";

export default {
    name: "HeaderApp",
    data() {
        return {
            store,
            selection: ""
        }
    }
}
</script>

<template>
    <header>
        <div class="header-start">
            <h1>BOOLFLIX</h1>

            <button>Home</button>

            <button>Serie TV</button>

            <button>Film</button>

            <button>Originali</button>

            <button>Aggiunti di recente</button>

            <button>La mia lista</button>

            <select name="genres" id="genre-selector"
             v-model="selection"
             @change="store.genreSelected = this.selection"
            >
                <option v-for="genre in store.genre" :value="genre.id">{{ genre.name }}</option>
            </select>
        </div>
        



        <form action="" @submit.prevent="onSubmit">
            <input type="text" placeholder="&#128269;"
             v-model="store.researchedTitle"
             @keyup.enter="$emit('search')"
            >

            <button class="user-btn">USER</button>

            <button class="notification-btn"><font-awesome-icon icon="fa-solid fa-bell" /></button>

            <button class="user-icon-btn">
                <font-awesome-icon icon="fa-solid fa-face-smile" />
                <font-awesome-icon icon="fa-solid fa-sort-down" />
            </button>
        </form>
    </header>
</template>

<style  lang="scss" scoped>


    header {
        height: 10vh;
        width: 100%;
        background-color: #191919;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header-start {
            display: flex;

            button {
                @include header-start-btn;
            }

            select {
                @include header-start-btn;
                outline: none;
                width: fit-content;

                option {
                    background-color: #353535;
                }
            }

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
                    background: #191919;
                }
            }
        }

        input {
            height: 2rem;
            width: 2rem;
            border-radius: 20px;
            border: none;
            padding: 5px;
            outline: none;
            transition: all 0.2s ease-out;
            background-color: transparent;

            &:focus {
                width: 10rem;
                background-color: rgb(167, 167, 167);
            }
        }

        .user-btn {
            @include header-buttons;
        }

        .notification-btn {
            @include header-buttons;
        }

        .user-icon-btn {
            @include header-buttons;
            
            > :first-child {
                color: cornflowerblue;
            }

            > :last-child {
                margin: 0 0 5px 5px;
                font-size: small;
            }
        }
    }

</style>