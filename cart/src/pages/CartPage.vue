<script setup>
import { carts } from '../data/data';
import { computed, ref, toDisplayString, watch } from "vue";

//todo make selecteditems a global store to access from the checkout.
const selectedItemsIndex = ref([]);
const total = ref(0);
const allSelected = ref(false);

const selectedItems = computed(()=>{
    return selectedItemsIndex?.value.map(i=>carts.value[i])
});

const isAllSelected = computed(() => {
  return selectedItemsIndex.value.length === carts.value.length;
});

watch(allSelected, (newVal)=>{
    if(newVal){
        selectedItemsIndex.value = Array.from(carts.value.keys());//to set all the index selected
    }
    else{
        selectedItemsIndex.value = []
    }
}, {immediate: true});

watch(selectedItems, ()=>{
    const unTranformedTotal = selectedItems?.value.reduce((total, item)=>total+item.price*item.quantity, 0);
    total.value = parseFloat(unTranformedTotal.toFixed(2));
}, {immediate: true});

const removeProduct= (index)=>{
    carts.value.splice(index, 1);
    //this is to ensure that the index of the items remains unchanged.[0, 1, 2, 3, 4, 5, 6] , to remove 2, => [0, 1] + [3, 4, 5, 6]
    selectedItemsIndex.value = selectedItemsIndex.value.filter(i => i < index).concat(selectedItemsIndex.value.filter(i => i > index).map(i => i - 1));
}

const handleCheckout = ()=>{
    if(selectedItems.length < 1){
        alert("please select items.");
    }
    else{
        alert("Checked out");
        //send users to the checkout page. & handle checkout logic
        selectedItemsIndex.value.forEach(index=>{
            carts.value = carts.value.splice(index, 1);
        })
    }
}

</script>

<template>
    <div class="w-full flex flex-col items-center mb-8">
        <h1 class="text-xl text-gray-600 font-bold my-2">My Cart</h1>
        <table class="w-9/12 text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-2 py-3">
                        <input type="checkbox" class="cursor-pointer" v-model="allSelected" :checked="isAllSelected">
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
                        <i class="fa fa-trash cursor-pointer" aria-hidden="true" @click="removeProduct(index)"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="flex gap-4 items-center">
        <div class="space-x-2">
            <span class="text-gray-600 font-bold">Subtotal:</span>
            <span class="font-semibold text-orange-500">Rs. {{ total }}</span>
        </div>
        <button class="bg-orange-500 px-4 py-1 rounded-sm text-white font-semibold" @click="handleCheckout">Check Out</button>
    </div>
</template>

<style scoped></style>