<template>
  <div class="relative w-48 h-64 overflow-hidden shadow-lg rounded-xl">
    <img :src="photo" alt="User photo" class="object-cover w-full h-full" />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
    ></div>
    <div class="absolute text-lg font-bold text-white bottom-4 left-4">
      <p>{{ firstName }}</p>
      <p>{{ lastName }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  photo: String,
  firstName: String,
  lastName: String,
});
</script>
