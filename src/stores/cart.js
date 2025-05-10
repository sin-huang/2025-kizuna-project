import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useProductStore } from "./products";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  //加入商品到購物車
  const addCart = () => {};
});
