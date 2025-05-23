<script setup>
import { useProductStore } from "@/stores/products.js";
import ProductCard from "@/components/productdetail/ProductCard.vue"
const productStore = useProductStore();
const { products } = productStore;
</script>
<template>
	<p>-商品資訊-</p>
	<ProductCard v-for="product in products" :key="product.id"/>
</template>
<style></style>
