<script setup>
import { RouterView } from "vue-router";
//test
import navBar from "./components/NavBar.vue";
import cartPage1 from "./pages/cartPage1.vue";
import navBar from "./components/NavBar.vue";
</script>

<template>
   <navBar />
   <main class="w-screen pt-20 px-10 flex flex-col items-center">
   <!-- <cartPage1 /> -->
   <RouterView/>
   </main>
</template>

<style scoped>
</style>
