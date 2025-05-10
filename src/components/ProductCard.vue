<script setup>
import { useProductStore } from "@/stores/products.js";
const productStore = useProductStore();

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
// 記得要使用props，還有該拿到的變數資料(js)要進來
</script>

<template>
  <p>{{ product.name }}</p>
  <br />
  <p>{{ product.price }}</p>
  <br />
  <p>{{ product.inventory }}</p>
</template>

<style scoped></style>
