# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


Boolflix


Milestone 0: progetto struttura app
    - Componenti e file necessari:
        - App.vue
            -importazione componenti, axios e store
            -chiamata API
            -ricezione $emit
        - HeaderApp.vue
            -form
                -input text con v-model
                -button con evento $emit
        - MainApp.vue
            -ul
                -li/ titolo
                -li/ titolo originale
                -li/ lingua
                -li/ voto
        - store.js
            -conservazione dati API