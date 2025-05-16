<script setup>
import { useProductStore } from "@/stores/products.js";
import ProductCard from "@/components/ProductCard.vue";
const productStore = useProductStore();
const { products } = productStore;
</script>

<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <ProductCard
    v-for="product in products"
    :key="product.id"
    :product="product"
  />
  </div>
</template>

<style scoped></style>
