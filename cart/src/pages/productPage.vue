<script setup>
    import { products, carts } from '../data/data';
    import { watch , ref} from "vue";

    const props = defineProps({
        id: String
    })

    const product = ref(null);

    // watch(()=>products, (products)=>{
    //     console.log(products);
    // }, {immediate: true});

    console.log(products);
    // console.log("id: " + props.id);
    const addTocart = (product, index)=>{
            carts.value.push(product);
            products[index].quantity -= 1;
            console.log(carts);
        }

</script>

<template>
    <div v-if="product">
    <div class="m-4 md:w-1/2 max-h-80 flex space-x-10 border-2">
        <div class="w-1/2 h-auto overflow-hidden"><img :src="product.image" :alt="product.image" class="p-2 h-full w-full object-contain"></div>
        <div class="flex flex-col space-y-2">
            <div>
                <h1 class="text-xl font-semibold my-4">{{ product.title }}</h1>
                <p><span class="text-gray-600 font-bold">Price: </span><span class="text-gray-500 font-semibold">Rs.{{ product.price }}</span></p>
            </div>
            <div class="flex text-gray-600 font-semibold space-x-4">
                <p>Quantity</p>
                <div class="space-x-4">
                    <button>-</button>
                    <span>22</span>
                    <button>+</button>
                </div>
            </div>
            <div class="space-x-2 w-full flex">
                <button class="bg-blue-400 px-4 py-1 font-semibold text-white">Buy Now</button>
                <button class="bg-orange-400 px-4 py-1 font-semibold text-white" @click="addTocart()">Add to cart</button>
            </div>
        </div>
    </div>
    <div class="md:w-1/2 mx-4  space-y-4">
        <h1 class="sm:text-sm md:text-xl font-bold text-gray-600">Product Description</h1>
        <p class="text-gray-500 font-semibold sm:text-xs md:text-sm">{{ product.description }}</p>
    </div>
</div>
</template>

<style scoped></style>