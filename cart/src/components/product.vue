<script setup>

    import { ref } from "vue";

    const carts = ref([]);
    const isCardVisible = true;

    const products = [
            {
                "name": "Wireless Mouse",
                "price": 29.99,
                "quantity": 150
            },
            {
                "name": "Bluetooth Keyboard",
                "price": 49.99,
                "quantity": 75
            },
            {
                "name": "HD Monitor",
                "price": 199.99,
                "quantity": 40
            },
            {
                "name": "Smartphone Charger",
                "price": 15.99,
                "quantity": 300
            },
            {
                "name": "Backpack",
                "price": 89.99,
                "quantity": 60
            }
    ];

    const addTocart = (product, index)=>{
        carts.value.push(product);
        products[index].quantity -= 1;
        console.log(carts);
    }

</script>

<template>

    <div class="">
        <div class="carts">
            <h1>Carts {{ carts.length > 0 ? carts.length : "" }}</h1>
            
            <!-- <div v-for="product in carts" v-show="isCardVisible">
                <ul v-if="product.quantity > 0">
                    <li>product name: {{ product.name }}</li>
                    <li>product price: {{ product.price}}</li>
                    <li>product quantity: {{ product.quantity }}</li>
                </ul>
            </div> -->
        </div>

        <div class="products">
            <div v-for="(product, index) in products" :key="index" >
                <ul v-if="product.quantity > 0">
                    <li>product name: {{ product.name }}</li>
                    <li>product price: {{ product.price}}</li>
                    <li>product quantity: {{ product.quantity }}</li>
                </ul>
                <button @click="addTocart(product, index)">Add to cart</button>
            </div>
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
