import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useProductStore = defineStore("products", () => {

  const products = ref([
    {
      id: 1,
      img: "https://lcp-prod-obs.line-scdn.net/0hB0cYFDAAHR9eIA3Q1u9iSA19EW5tURkXN1gAInplPHAITAkVNA4CDwxpP3NzUTERCQ0zHzpmPHcYETsvAhoHHHppKEoYVDEsOx8CJTlrPGQDWSEVOE4uCQ/f300",
      name: "烏龍奶茶",
      price: 350,
      inventory: 5,
      description:
        "輕食沙拉以新鮮、健康、美味為核心，選用當季蔬果、優質蛋白與天然食材，搭配精心調製的醬料，帶來清爽又營養的味蕾享受。無論是忙碌日常的快速餐點，還是追求健康生活的首選，輕食沙拉都能為你注入活力與滿足！",
    },
  ]);

  //取得所有可以購買的商品(庫存大於0) 記得計算要加computed!!!!
  const avaliableProducts = computed(() => {
    return products.value.filter((product) => product.inventory > 0);
  });

  //減少庫存
  const decreaseInventory = (ItemId) => {
    const product = products.value.find((product) => product.id === ItemId);

    if (product && product.inventory > 0) {
      product.inventory--;
    }
  };

  //增加庫存
  const increaseInventory = (ItemId) => {
    const product = products.value.find((product) => product.id === ItemId);

    if (product) {
      product.inventory++;
    }
  };
  return { products, avaliableProducts, decreaseInventory, increaseInventory }; //記得return
});
