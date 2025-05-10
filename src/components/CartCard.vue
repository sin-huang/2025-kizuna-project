<script setup>
import { useCartStore } from "@/stores/cart.js";
const cartStore = useCartStore();
const { cartItems } = cartStore;
//傳資料:三部曲

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <p>商品: {{ item.name }}</p>
  <p>價格: {{ item.price }}</p>
  <p>數量: {{ item.quantity }}</p>
</template>

<style scoped></style>
