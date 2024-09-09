<script setup>
import { carts } from '../data/data';
import { computed, ref, toDisplayString, watch } from "vue";

const selectedItemsIndex = ref([]);
const total = ref(0);

const allSelected = ref(false);
const selectedItems = computed(()=>{
    return selectedItemsIndex?.value.map(i=>carts.value[i])
});


watch(allSelected, ()=>{
    if(allSelected.value === true){
        selectedItemsIndex.value =  Array.from(Array(carts.value.length).keys());       //to set all the index selected
    }
    else{
        selectedItemsIndex.value = []
    }
});

watch(selectedItems, ()=>{
    total.value = selectedItems?.value.reduce((total, item)=>total+item.price*item.quantity, 0);
})
</script>

<template>
    <div class="w-full flex flex-col items-center mb-8">
        <h1 class="text-xl text-gray-600 font-bold my-2">My Cart</h1>
        <table class="w-9/12 text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-2 py-3">
                        <input type="checkbox" class="cursor-pointer" v-model="allSelected">
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Image</span>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Product
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Qty
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b hover:bg-gray-50 text-xs" v-for="(product, index) in carts" :key="index">
                    <td class="px-2 py-4">
                        <input type="checkbox" v-model="selectedItemsIndex" :value="index" class="cursor-pointer" :checked="allSelected" :key="index"/>
                    </td>
                    <td class="p-4">
                        <img :src="product.image" class="md:w-16 max-w-full max-h-full" :alt="product.title">
                    </td>
                    <td class="px-6 py-4 font-semibold  text-gray-900">
                        {{ product.title }}
                    </td>
                    <td class="px-6 py-4 font-semibold">
                        {{ product.quantity }}
                    </td>
                    <td class="px-6 py-4 font-semibold text-orange-500">
                        {{ product.price }}
                    </td>
                    <td class="px-6 py-4">
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                        <button class="font-medium text-red-600 hover:underline">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="flex gap-4 items-center">
        <div>
            <span>Subtotal:</span>
            <span>{{ total }}</span>
        </div>
        <button class="bg-orange-500 px-4 py-1 rounded-sm">Check Out</button>
    </div>

</template>

<style scoped></style>