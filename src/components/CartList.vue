<script setup>
import CartCard from "@/components/CartCard.vue";
import { useCartStore } from "@/stores/cart.js";
const cartStore = useCartStore();
const { cartItems } = cartStore;
</script>

<template>
  <CartCard v-for="item in cartItems" :key="item.id" :item="item" />
</template>

<style scoped></style>
