import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useProductStore } from "./products";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  //加入商品到購物車
  const addCart = (product) => {
    const existingItem = cartItems.value.find((item) => item.id === product.id);
  };

  return { cartItems, addCart };
});
