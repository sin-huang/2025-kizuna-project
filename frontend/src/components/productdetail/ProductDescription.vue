<script setup>
import { useProductStore } from "@/stores/products.js";
const productStore = useProductStore();
const { products } = productStore;
</script>
<template>
    <p class="text-gray-800 text-center mb-2 mt-4">-商品資訊-</p>
    <div class="bg-[#C0D7EC] pt-6 pb-6">
      <p class="text-gray-600 text-center max-w-[500px] mx-auto">{{ products[0].description }}</p>
    </div>
</template>
<style></style>
