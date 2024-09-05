<script setup>

    import { ref, onMounted} from "vue";
    import ProductSingle from "../components/productSingle.vue";
    import { products, carts } from "../data/data";
    const loading = ref(true); 

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

    <div class="">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6  gap-8">
            <div v-if="loading">
                Loading...
            </div>
            <ProductSingle v-else v-for="(product, index) in products" :product="product" :key="index" />
            
        </div>
    </div>

</template>


<style>
    .carts, .products{
        margin: 10px;
        border: 2px solid;
    }

    .products{
        display: flex;
        gap:10px;
        flex-wrap: wrap;
    }

    .products div{
        width: 500px;
        border: 2px solid yellow;
        padding: 20px;
    }

    li{
        list-style: none;
    }
</style>
