import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useProductStore = defineStore("products", () => {
  //商品列表
  const products = ref([
    { id: 1, name: "粉底", price: "350", inventory: 5 },
    { id: 2, name: "眼影", price: "500", inventory: 6 },
    { id: 3, name: "口紅", price: "200", inventory: 7 },
  ]);

  //取得所有可以購買的商品(庫存大於0) 記得計算要加computed!!!!
  const avaliableProduct = computed(() => {
    return products.value.filter((product) => product.inventory > 0);
  });

  //減少庫存
  const decreaseInventory = (productId) => {
    const product = products.value.find((product) => product.id === productId);

    if (product && product.inventory > 0) {
      product.inventory--;
    }
  };

  //增加庫存
  const increaseInventory = (productId) => {
    const product = products.value.find((product) => product.id === productId);

    if (product) {
      product.inventory++;
    }
  };
  return { products, avaliableProduct, decreaseInventory, increaseInventory }; //記得return
});
