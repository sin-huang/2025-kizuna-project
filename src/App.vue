<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="text-white bg-blue-900 shadow-md">
    <nav class="flex justify-start">
      <RouterLink to="/" class="p-6 text-lg transition hover:text-gray-300">Product</RouterLink>
      <RouterLink to="/cart" class="p-6 text-lg transition hover:text-gray-300">Cart</RouterLink>
    </nav>
  </header>
  <main class="max-w-[1000px] mx-auto mt-24 ">
    <RouterView />
  </main>
</template>

<style scoped></style>
