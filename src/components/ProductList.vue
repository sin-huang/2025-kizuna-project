<script setup>
import { useProductStore } from "@/stores/products.js";
import ProductCard from "@/components/ProductCard.vue";
const productStore = useProductStore();
</script>

<template>
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :name="product.name"
    :price="product.price"
    :inventory="product.inventory"
  />
</template>

<style scoped></style>
