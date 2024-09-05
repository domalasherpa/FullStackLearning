<script setup>
import { ref, computed } from "vue";
import { RouterView } from "vue-router";

import productsPage from "./pages/productsPage.vue";
import cartPage from './pages/cartPage.vue';
import homePage from "./pages/homePage.vue";
import productSingle from "./components/productSingle.vue";
import notFound from "./pages/notFound.vue";


//test
import navBar from "./components/navBar.vue";
</script>

<template>
   <navBar />
   <main class="w-screen pt-20 px-10 flex flex-col items-center">
   <RouterView/>
   </main>
</template>

<style scoped>
</style>
