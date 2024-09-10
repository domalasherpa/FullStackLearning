import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useSelectedItems = defineStore('selectedItems', ()=>{
    const selectedItems = reactive({});

    const total = computed(() => {
        const temp = Object.values(selectedItems).reduce((acc, item) => acc + item.quantity * item.price, 0);
        return parseFloat(temp.toFixed(2));
    });

    const selectedItemsCount = computed(()=>{return Object.keys(selectedItems).length});

    const removeItem = (productId)=>{
        delete selectedItems[productId];
    }

    const addItem = (product)=>{
        selectedItems[product.id] = product
    }

    return {
        selectedItems, 
        total,
        selectedItemsCount,
        removeItem,
        addItem
    }
})