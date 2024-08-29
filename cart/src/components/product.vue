<script setup>

    import { ref } from "vue";

    const carts = ref([]);
    const isCardVisible = true;
    let products = ref([]);

    const getProducts = async()=>{
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            products.value = await res.json();
        }
        catch(err){
            console.log("Error fetching data");
        }
    }

    const addTocart = (product, index)=>{
        carts.value.push(product);
        products[index].quantity -= 1;
        console.log(carts);
    }

    
    getProducts();

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

            <div v-if="products.length>0" v-for="(product, index) in products" :key="index" >
                <img :src="product.image" alt="" style="height: 100px; object-fit: contain;">
                <table>
                    <tr>
                        <td>Product Name</td>
                        <td>{{ product.title }}</td>
                    </tr>
                    <tr>
                        <td>Product Price</td>
                        <td>{{ product.price }}</td>
                    </tr>
                </table>
                <button @click="addTocart(product, index)">Add to cart</button>
            </div>
            <div v-else>
                Loading...
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
