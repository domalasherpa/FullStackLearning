<script setup>


const props = defineProps({
    product: Object
});

const productLink = '/products/' + props.product.id;

</script>

<template>
    <div class="bg-white dark:bg-gray-800  cursor-pointer flex-col h-full justify-between">
        <div class="h-40 border-2 border-orange-200 shadow">
            <img class="p-2 h-full w-full object-contain" :src="product.image" :alt="product.title" />
        </div>
        <div class="my-4">
            <a :href="productLink">
                <h5 class="text-xs font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
            </a>
            <p class="text-xs my-2 font-bold text-orange-600"><span>Rs</span>{{ product.price }}</p>
        </div>
    </div>
</template>



<style scoped>
</style>