<template>
    <nav class="bg-gray-900 w-full fixed border-b border-gray-200 border-gray-600 flex justify-center h-16">
    <div class="self-center p-4 ">
        <ul class="flex p-4 md:p-0 mt-4 font-semibold rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
                <router-link to="/" 
                class="block py-2 px-3 text-white hover:text-orange-400" aria-current="page" 
                exact-active-class="text-orange-500"
                >Home</router-link>
            </li>
            <li>
                <router-link to="/cart" 
                class="block py-2 px-3 text-white hover:text-orange-400" 
                exact-active-class="text-orange-500"
                >Carts</router-link>
            </li>
        </ul>
    </div>
    </nav>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import { useRouter } from 'vue-router';

</script>

<style scoped>

</style>