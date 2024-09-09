<script setup>
import { useRoute } from 'vue-router';
import { carts } from '../data/data';
import { watch, ref, reactive } from 'vue';

const route = useRoute();
const loading = ref(false);
const product = reactive({});
const quantity = ref(1);

watch(() => parseInt(route.params.id), async (newId) => {
    loading.value = true;
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${newId}`);
        Object.assign(product, await res.json());
        product.availableQuantity = Math.floor(Math.random() * 100) + 1; // Random quantity between 1 and 100
    } catch (err) {
        console.log("Error fetching data:", err);
    } finally {
        loading.value = false;
    }
}, { immediate: true });

const addTocart = () => {
    if (product.id) {
        if(product.id in carts){
            carts[product.id].quantity += quantity.value;
        }
        else{
            carts[product.id] = { ...product, quantity: quantity.value };
        }
        alert("Added to cart.");
    } else {
        alert("Product not available.");
    }
};

const handleQuantityDcr = () => {
    if (quantity.value > 1) {
        quantity.value -= 1;
    }
};

const handleQuantityInc = () => {
    if (quantity.value < product.availableQuantity) {
        quantity.value += 1;
    } else {
        alert("Please choose up to the available quantity only.");
    }
};

const handleInputQuantity = (event)=>{
    const inputQuantity = parseInt(event.target.value, 10);
    if (isNaN(inputQuantity) || inputQuantity < 1 || inputQuantity > product.availableQuantity) {
        quantity.value = 1;
        alert("please enter a valid quantity");
    } else {
        quantity.value = inputQuantity;
    }
}
</script>

<template>
    <div v-if="loading" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-else class="flex flex-col w-screen items-center">
      <div class="m-4 lg:w-1/2 flex-row md:flex space-x-10 border-2 py-4">
        <div class="h-40 lg:min-h-80 md:w-1/2">
          <img :src="product.image" :alt="product.title" class="p-2 h-full w-full object-contain" />
        </div>
        <div class="flex flex-col space-y-2 md:w-1/2">
          <div>
            <h1 class="text-xl font-semibold my-4">{{ product.title }}</h1>
            <p class="space-x-4"><span class="text-gray-600 font-bold">Price:</span><span class="text-gray-500 font-semibold">Rs. {{ product.price }}</span></p>
            <p class="space-x-4"><span class="text-gray-600 font-bold">Available quantity:</span><span class="text-gray-500 font-semibold">{{ product.availableQuantity }}</span></p>
          </div>
          <div class="flex text-gray-600 font-semibold space-x-4">
            <p>Quantity</p>
            <div class="space-x-4">
              <button @click="handleQuantityDcr">-</button>
              <input class="w-10 text-center border-2 border-gray-200" type="text" v-model.number="quantity" @change="handleInputQuantity($event)" placeholder="1"/>
              <button @click="handleQuantityInc">+</button>
            </div>
          </div>
          <div class="space-x-2 w-full flex">
            <button class="bg-blue-400 px-4 py-1 font-semibold text-white">Buy Now</button>
            <button class="bg-orange-400 px-4 py-1 font-semibold text-white" @click="addTocart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 mx-4 space-y-4">
        <h1 class="sm:text-sm md:text-xl font-bold text-gray-600">Product Description</h1>
        <p class="text-gray-500 font-semibold sm:text-xs md:text-sm">{{ product.description }}</p>
      </div>
    </div>
  </template>
  