<script setup>
import { computed, reactive, ref } from 'vue';
import { useCartStore } from '../stores/CartStore';

const CartStore = useCartStore();
const selectedItems = reactive({});
const allSelected = ref(false);

const total = computed(() => {
	const temp = Object.values(selectedItems).reduce((acc, item) => acc + item.quantity * item.price, 0);
	return parseFloat(temp.toFixed(2));
});

const selectAll = (event) => {
	if (event.target.checked) {
		Object.keys(CartStore.carts).forEach(productId => {
			selectedItems[productId] = CartStore.carts[productId];
		});
	} else {
		Object.keys(selectedItems).forEach(productId => {
			delete selectedItems[productId];
		});
	}
	allSelected.value = event.target.checked;
};

// if all are not selected or if one unselected then change state of allSelected
const updateAllSelectedState = () => {
	const totalItems = CartStore.cartsSize;
	const selectedItemsCount = Object.keys(selectedItems).length;
	allSelected.value = totalItems === selectedItemsCount;
};

const handleCheckboxToggle = (productId) => {
	if (selectedItems[productId]) {
		delete selectedItems[productId];
	} else {
		selectedItems[productId] = CartStore.carts[productId];
	}
	updateAllSelectedState();
};

const removeProduct = (productId) => {
	CartStore.removeItem(productId);
	delete selectedItems[productId];
	console.log(CartStore.carts);
	updateAllSelectedState();
};

const handleCheckout = () => {
	alert('Proceeding to checkout');
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
		<table class="w-9/12 text-sm text-left rtl:text-right text-gray-500">
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
							:checked="product.id in selectedItems" @change="handleCheckboxToggle(product.id)" />
					</td>
					<td class="p-4">
						<img :src="product.image" class="md:w-16 max-w-full max-h-full" :alt="product.title">
					</td>
					<td class="px-6 py-4 font-semibold text-gray-900">{{ product.title }}</td>
					<td class="px-6 py-4 font-semibold">
						<div class="space-x-4">
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
		<div class="flex gap-4 items-center">
			<div class="space-x-2">
				<span class="text-gray-600 font-bold">Subtotal:</span>
				<span class="font-semibold text-orange-500">Rs. {{ total }}</span>
			</div>
			<button class="bg-orange-500 px-4 py-1 rounded-sm text-white font-semibold" @click="handleCheckout">
				Check Out
			</button>
		</div>
	</div>
</template>