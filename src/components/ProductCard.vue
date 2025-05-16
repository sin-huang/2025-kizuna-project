<script setup>
import { useProductStore } from "@/stores/products.js";
import { useCartStore } from "@/stores/cart.js";

const productStore = useProductStore();
const cartStore = useCartStore();

const { addCart } = cartStore; //解構拿來使用

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
// 記得要使用props，還有該拿到的變數資料(js)要進來
</script>

<template>
  <div
    class="flex flex-col items-center p-4 transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-xl"
  >
    <div>
      <img :src="product.img" alt="" class="rounded-lg" />
    </div>
    <p class="mt-2 mb-1 text-lg font-semibold text-gray-800">
      {{ product.name }}
    </p>
    <p class="mb-1 text-gray-600">價格: {{ product.price }}</p>
    <p class="text-gray-600">庫存: {{ product.inventory }}</p>
    <!-- 0516: 加入庫存歸0時 按紐不能點、顏色變灰、滑鼠只到變成禁止圖示 
               用 v-bind 綁定 按鈕的disabled屬性 
               當商城中的商品庫存為0時 按鈕的disabled啟用
    -->
    <button
      @click="addCart(product)"
      :disabled="product.inventory === 0"
      class="px-4 py-2 mt-4 text-white transition bg-blue-800 rounded hover:bg-blue-900 disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      加入購物車
    </button>
  </div>
</template>

<style scoped></style>
