import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useProductStore = defineStore("products", () => {
  //商品列表
  const products = ref([
    { id: 1, name: "粉底", price: "350", inventory: 5 },
    { id: 2, name: "眼影", price: "500", inventory: 6 },
    { id: 3, name: "口紅", price: "200", inventory: 7 },
  ]);

  return { products }; //記得return
});
