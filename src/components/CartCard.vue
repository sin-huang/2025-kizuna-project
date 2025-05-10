<script setup>
import { useCartStore } from "@/stores/cart.js";
const cartStore = useCartStore();
const { cartItems } = cartStore;
//三部曲:傳資料

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <p>{{ item.id }}</p>
  <p>{{ item.name }}</p>
  <p>{{ item.price }}</p>
  <p>{{ item.quantity }}</p>
</template>

<style scoped></style>
