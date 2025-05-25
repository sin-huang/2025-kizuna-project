<script setup>
import { useProductStore } from "@/stores/products.js";
import ProductCard from "@/components/productdetail/ProductCard.vue";
const productStore = useProductStore();
const { products } = productStore;
</script>
<template>
  <p class="text-center text-lg font-semibold text-gray-800 mt-4 mb-2">更多推薦</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<style></style>
