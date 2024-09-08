<script setup>
const props = defineProps({
    product: Object
});
</script>

<template>
    <router-link :to="{name: 'productDetails', params:{id: product.id}}">
        <div class="bg-white cursor-pointer flex-col h-full justify-between hover:shadow-md">
            <div class="h-40 border-2 border-orange-200 shadow">
                <img class="p-2 h-full w-full object-contain" :src="product.image" :alt="product.title" />
            </div>
            <div class="px-2">
                
                    <h5 class="text-xs font-semibold tracking-tight text-gray-900">{{ product.title }}</h5>
                
                <p class="text-xs my-2 font-bold text-orange-600"><span>Rs</span>{{ product.price }}</p>
            </div>
        </div>
    </router-link>
</template>



<style scoped>
</style>