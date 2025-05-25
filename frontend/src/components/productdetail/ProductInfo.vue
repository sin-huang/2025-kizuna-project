<script setup>
import { useProductStore } from "@/stores/products.js";
const productStore = useProductStore();
const { products } = productStore;
</script>
<template>
    <div class="max-w-[500px] mx-auto">
      <img :src="products[0].img" alt="main-product" class="rounded-lg w-full"/>
    </div>
    <h2 class="text-center text-lg font-semibold text-gray-800 mt-2 mb-1">{{ products[0].name }}</h2>
    <p class="text-center text-[#7395BA] mb-2">${{ products[0].price }}</p>
    <button
      class="px-4 py-2 text-white bg-[#7395BA] rounded w-fit hover:bg-blue-900 block mx-auto"
    >
      加入購物車
    </button>
</template>
<style></style>
