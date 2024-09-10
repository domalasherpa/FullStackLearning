<script setup>
import { ref, onMounted } from "vue";
import ProductSingle from "../components/ProductSingle.vue";
const loading = ref(true);

const products = ref([]);
const getProducts = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        products.value = await res.json();
    } catch (err) {
        console.log("Error fetching data:", err);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    getProducts();
})
</script>

<template>
    <div v-if="loading" class="text-center">
        Loading...
    </div>
    <div v-else class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6  gap-8">

        <ProductSingle v-for="(product, index) in products" :product="product" :key="index" />

    </div>
</template>

<style></style>
