import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useCartStore = defineStore('cartStore', ()=>{
    const carts = reactive({});
    const cartsSize = computed(()=>{return Object.entries(carts).length});
    const isCartEmpty = computed(() => {
        return Object.entries(carts).length === 0;
    });

    const increaseQnty= (productId)=>{
        if(carts[productId].quantity < carts[productId].availableQuantity){
            carts[productId].quantity += 1;
        }
    }

    const decreaseQnty = (productId)=>{    
        if(carts[productId].quantity > 1){
            carts[productId].quantity -= 1;
        }
    }

    const setQuantity=(productId, newQuantity)=>{
        if(productId in carts && carts[productId].availableQuantity > newQuantity){
            carts[productId].quantity = newQuantity;
        }
    }

    const addItem = (product, quantity)=>{
        if(product.id in carts){
            carts[product.id].quantity += quantity; 
        }
        else{
            carts[product.id] = {...product, quantity: quantity}; 
        }
    }
    
    const removeItem= (productId)=>{
        delete carts[productId];
    }

    return {
        carts,
        cartsSize, 
        isCartEmpty, 
        increaseQnty,
        decreaseQnty,
        setQuantity,
        addItem,
        removeItem
    }
})