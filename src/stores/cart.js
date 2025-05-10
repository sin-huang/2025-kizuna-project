import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useProductStore } from "./products";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  // items 預計的資料架構
  // { id: 1, name: '機械鍵盤', price: 2999, quantity: 1 }

  //加入商品到購物車
  const addCart = (product) => {
    const existingItem = cartItems.value.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
  };

  return { cartItems, addCart };
});
