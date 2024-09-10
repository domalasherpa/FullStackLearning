<script setup>
import { computed, reactive, ref } from 'vue';
import { useCartStore } from '../stores/CartStore';
import { useRouter } from 'vue-router';
import { useSelectedItems } from '../stores/SelectedStore';

const CartStore = useCartStore();
const selectedItemsStore = useSelectedItems();

const allSelected = ref(false);
const router = useRouter();

const selectAll = (event) => {
	if (event.target.checked) {
		Object.keys(CartStore.carts).forEach(productId => {
			selectedItemsStore.addItem(CartStore.carts[productId]);
		});
	} else {
		Object.keys(selectedItemsStore.selectedItems).forEach(productId => {
			selectedItemsStore.removeItem(productId);
		});
	}
	allSelected.value = event.target.checked;
};

// if all are not selected or if one unselected then change state of allSelected
const updateAllSelectedState = () => {
	allSelected.value = CartStore.cartsSize === selectedItemsStore.selectedItemsCount;
};

const handleCheckboxToggle = (productId) => {
	if (productId in selectedItemsStore.selectedItems) {
		selectedItemsStore.removeItem(productId);
	} else {
		selectedItemsStore.addItem(CartStore.carts[productId]);
	}
	updateAllSelectedState();
};

const removeProduct = (productId) => {
	CartStore.removeItem(productId);
	selectedItemsStore.removeItem(productId);
	console.log(CartStore.carts);
	updateAllSelectedState();
};

const handleCheckout = () => {
	router.push({ path:'/checkout'});
};

const handleQuantityDcr = (productId) => {CartStore.decreaseQnty(productId)};

const handleQuantityInc = (productId) => {CartStore.increaseQnty(productId)};

const handleInputQuantity = (event, productId) => {
	const inputQuantity = parseInt(event.target.value, 10);
	if (isNaN(inputQuantity) || inputQuantity < 1 || inputQuantity > CartStore.carts[productId].availableQuantity) {
		event.target.value = CartStore.carts[productId].quantity;
		alert("please enter a valid quantity");
	} else {
		CartStore.setQuantity(inputQuantity);
	}
}
</script>

<template>
	<div v-if="CartStore.isCartEmpty">
		<p>Whoops! your cart is empty.</p>
	</div>
	<div v-else class="w-full flex flex-col items-center mb-8">
		<h1 class="text-xl text-gray-600 font-bold my-2">My Cart</h1>
		<table class="w-full md:w-9/12 text-sm text-left rtl:text-right text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" class="px-2 py-3">
						<input type="checkbox" class="cursor-pointer" :checked="allSelected" @change="selectAll" />
					</th>
					<th scope="col" class="px-6 py-3">
						<span class="sr-only">Image</span>
					</th>
					<th scope="col" class="px-6 py-3">Product</th>
					<th scope="col" class="px-6 py-3">Qty</th>
					<th scope="col" class="px-6 py-3">Price</th>
					<th scope="col" class="px-6 py-3">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(product) in CartStore.carts" :key="product.id" class="bg-white border-b hover:bg-gray-50 text-xs">
					<td class="px-2 py-4">
						<input type="checkbox" :value="product.id" class="cursor-pointer"
							:checked="product.id in selectedItemsStore.selectedItems" @change="handleCheckboxToggle(product.id)" />
					</td>
					<td class="py-1">
						<img :src="product.image" class="md:w-16 max-w-full max-h-full" :alt="product.title">
					</td>
					<td class="px-6 py-4 font-semibold text-gray-900"><router-link :to="{name: 'productDetails', params:{id: product.id}}">{{ product.title }}</router-link></td>
					<td class="font-semibold">
						<div class="space-x-2">
							<button @click="handleQuantityDcr(product.id)" class="w-5">-</button>
							<input class="w-10 text-center border-2 border-gray-200" type="text"
								:value="product.quantity" @change="handleInputQuantity($event, product.id)"
								placeholder="1" />
							<button @click="handleQuantityInc(product.id)" class="w-5">+</button>
						</div>
					</td>
					<td class="px-6 py-4 font-semibold text-orange-500">{{ product.price }}</td>
					<td class="px-6 py-4">
						<i class="fa fa-trash cursor-pointer" aria-hidden="true" @click="removeProduct(product.id)"></i>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="fixed bottom-0 bg-white w-full h-16">
			<div class="flex gap-4 items-center justify-center">
				<div class="space-x-2">
					<span class="text-gray-600 font-bold">Subtotal:</span>
					<span class="font-semibold text-orange-500">Rs. {{ selectedItemsStore.total }}</span>
				</div>
				<button class="bg-orange-500 px-4 py-1 rounded-sm text-white font-semibold" @click="handleCheckout">
					Check Out
				</button>
			</div>
		</div>
	</div>
</template>