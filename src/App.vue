<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="bg-blue-900 text-white shadow-md">
    <nav class="flex justify-start">
      <RouterLink to="/" class="p-6 text-lg hover:text-gray-300 transition">Product</RouterLink>
      <RouterLink to="/cart" class="p-6 text-lg hover:text-gray-300 transition">Cart</RouterLink>
    </nav>
  </header>
  <main class="max-w-[1000px] mx-auto mt-24 ">
    <RouterView />
  </main>
</template>

<style scoped></style>
