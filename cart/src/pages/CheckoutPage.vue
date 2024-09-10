<template>
    <div v-if="selectedItemsStore.selectedItemsCount > 0" class="flex flex-col md:flex-row md:justify-center w-full md:w-9/12 gap-8">
        <div class="space-y-2 p-0 lg:w-5/12">
            <div v-for="item in selectedItemsStore.selectedItems" class="flex gap-4 border-2 p-4">
                <div class="h-20 w-auto"><img :src="item.image" alt="" class="w-full h-full object-contain"></div>
                <div class="space-y-2">
                    <div class="font-semibold text-gray-700">{{ item.title }}</div>
                    <div class="text-gray-400 text-sm font-semibold">
                        <p class="space-x-2"><span>Price:</span><span>Rs.{{ item.price }}</span></p>    
                        <p class="space-x-2"><span>Qty:</span><span>{{ item.quantity }}</span></p>    
                    </div>
                    <div class="text-orange-600 font-semibold">
                        <p class="space-x-1"><span>Rs.</span><span>{{ parseFloat(item.quantity * item.price).toFixed(2) }}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-2 lg:w-3/12 p-0">
            <div class="font-semibold text-gray-700 space-y-2 w-full p-4">
                <h1 class="">Order Summary</h1>
                <p class="space-x-2"><span>Total</span><span class="text-orange-500">Rs. {{ selectedItemsStore.total }}</span></p>
                <button class="w-full bg-orange-500 font-bold text-white p-2 rounded-sm hover:bg-orange-600" @click="handlePlaceOrder">Place Order</button>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Please select the items in <router-link to="/cart" class="underline text-blue-900 font-semibold">Carts</router-link></p>
    </div>
</template>

<script setup>
    import { useSelectedItems } from '../stores/SelectedStore';

    import CartPage from './CartPage.vue';
    import { useCartStore } from '../stores/CartStore';
    const selectedItemsStore = useSelectedItems();
    const cartStore = useCartStore();

    const handlePlaceOrder = ()=>{
        alert("placed order sucessfully.");
        Object.keys(selectedItemsStore.selectedItems).forEach(productId => {
            selectedItemsStore.removeItem(productId);
            cartStore.removeItem(productId);
		});
    }

</script>

<style scoped>

</style>