<script setup>
import { useProductStore } from "@/stores/products.js";
const productStore = useProductStore();
const { products } = productStore;
</script>
<template>
	<img :src="products[0].img" alt="main-product">
	<h2>{{ products[0].name }}</h2>
	<p>{{ products[0].price }}</p>
	<button class="px-4 py-1 text-white bg-blue-600 rounded w-fit hover:bg-blue-700 justify-self-end">加入購物車</button>
</template>
<style></style>


