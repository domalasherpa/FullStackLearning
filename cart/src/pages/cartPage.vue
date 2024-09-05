<script setup>
import { carts } from '../data/data';

</script>

<template>


<div class="w-full flex flex-col items-center mb-8">
    <h1 class="text-xl text-gray-600 font-bold my-2">Cart Items</h1>
    <table class="w-9/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-16 py-3">
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
            <template v-for="product in carts">
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs">
                <td class="p-4">
                    <img :src="product.image" class="md:w-16 max-w-full max-h-full" alt="iPhone 12">
                </td>
                <td class="px-6 py-4 font-semibold  text-gray-900 dark:text-white">
                    {{ product.title }}
                </td>
                <td class="px-6 py-4 font-semibold">
                    {{ product.quantity }}
                </td>
                <td class="px-6 py-4 font-semibold text-orange-500 dark:text-white">
                    {{product.price}}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
            </template>
        </tbody>
    </table>
</div>

</template>

<style scoped>
</style>