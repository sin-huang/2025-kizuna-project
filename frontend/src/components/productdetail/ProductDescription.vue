<script setup>
import { useProductStore } from "@/stores/products.js";
const productStore = useProductStore();
const { products } = productStore;
</script>
<template>
    <p>{{ products[0].description }}</p>
</template>
<style></style>