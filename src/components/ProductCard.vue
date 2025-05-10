<script setup>
import { useProductStore } from "@/stores/products.js";
import { useuseCartStore } from "@/stores/cart.js";

const productStore = useProductStore();
const cartStore = useCartStore();

const { addCart } = cartStore; //解構拿來使用

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
  <p>{{ product.price }}</p>
  <p>{{ product.inventory }}</p>
  <button @click="addCart(product)">加入購物車</button>
</template>

<style scoped></style>
