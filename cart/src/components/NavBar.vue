<template>
    <nav class="bg-white dark:bg-gray-900 w-full fixed border-b border-gray-200 dark:border-gray-600 flex justify-center h-16">
    <div class="self-center p-4 ">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <router-link to="/" class="block py-2 px-3 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-500" aria-current="page">Home</router-link>
            </li>
            <li>
                <router-link to="/products" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</router-link>
            </li>
            <li>
                <router-link to="/cart" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Carts</router-link>
            </li>
        </ul>
    </div>
    </nav>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>