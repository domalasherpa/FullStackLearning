<script setup>
    import { useRoute } from 'vue-router';
    import { carts } from '../data/data';
    import { watch , ref} from "vue";

    const route = useRoute();  //to get the route params id
    const loading = ref(false);
    const product = ref(null); //to store the product details
    const cartItem = ref(null); //to store the product choice with quantity

    watch(()=>parseInt(route.params.id), async(newId, oldId)=>{
        loading.value = true;
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${newId}`);
            product.value = await res.json();
            cartItem.value = product.value;

            cartItem.value.quantity = 1; //cartItem quantity is 1 by default.
            product.value.availableQuantity = Math.floor(Math.random() * 100) + 1; //get the quantity between 1 to 100
        } catch (err) {
            console.log("Error fetching data:", err);
        } finally {
            loading.value = false;
        }
    }, {immediate: true, once:true});

    const addTocart = ()=>{
        carts.value.push(cartItem.value);
        console.log(carts.value);
        alert("added to carts.");
    }

    const handleQuantityDcr = ()=>{
        if(cartItem.value.quantity > 1){cartItem.value.quantity -= 1}
    }
    const handleQuantityInc = ()=>{
        if(cartItem.value.quantity < product.value.availableQuantity){cartItem.value.quantity += 1}
        else{
            alert("whoops! Please choose upto available quantity only.");
        }
    }

    //check if the product is null or not, runs only if product is available
    //this is for when user types the quantity
    watch(()=>cartItem.value?.quantity, (newQuantity, oldQuantity)=>{
        if(newQuantity > product.value.availableQuantity || newQuantity < 1){
            cartItem.value.quantity = oldQuantity;
            alert("whoops! Please choose upto available quantity only.");
        }
    })
</script>

<template>
    <div v-if="loading" class="text-center">
        <p class="">Loading....</p>
    </div>
    <div v-else class="flex flex-col w-screen items-center">
        <div class="m-4 lg:w-1/2 flex-row md:flex space-x-10 border-2 py-4">
            <div class="h-40 lg:min-h-80 md:w-1/2">
                <img :src="product.image" :alt="product.image" class="p-2 h-full w-full object-contain">
            </div>
            <div class="flex flex-col space-y-2 md:w-1/2">
                <div>
                    <h1 class="text-xl font-semibold my-4">{{ product.title }}</h1>
                    <p class="space-x-4"><span class="text-gray-600 font-bold">Price: </span><span class="text-gray-500 font-semibold">Rs. {{ product.price }}</span></p>
                    <p class="space-x-4"><span class="text-gray-600 font-bold">Available quantity: </span><span class="text-gray-500 font-semibold">{{ product.availableQuantity }}</span></p>
                </div>
                <div class="flex text-gray-600 font-semibold space-x-4">
                    <p>Quantity</p>
                    <div class="space-x-4">
                        <button @click="handleQuantityDcr">-</button>
                         <input class="w-10 text-center border-2 border-gray-200" v-model="cartItem.quantity"/>
                        <button @click="handleQuantityInc">+</button>
                    </div>
                </div>
                <div class="space-x-2 w-full flex">
                    <button class="bg-blue-400 px-4 py-1 font-semibold text-white">Buy Now</button>
                    <button class="bg-orange-400 px-4 py-1 font-semibold text-white" @click="addTocart()">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="lg:w-1/2 mx-4  space-y-4">
            <h1 class="sm:text-sm md:text-xl font-bold text-gray-600">Product Description</h1>
            <p class="text-gray-500 font-semibold sm:text-xs md:text-sm">{{ product.description }}</p>
        </div>
    </div>
</template>

<style scoped></style>