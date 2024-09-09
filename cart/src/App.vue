<script setup>
import { RouterView } from "vue-router";
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
