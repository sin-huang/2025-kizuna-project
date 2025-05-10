<script setup>
import { useProductStore } from "@/stores/products.js";
import ProductCard from "@/components/ProductCard.vue";
const productStore = useProductStore();
const { products } = productStore;
</script>

<template>
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :product="product"
  />
  <!-- 記得可以直接傳物件 -->
</template>

<style scoped></style>
