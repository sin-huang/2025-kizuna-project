<template>
  <div :class="['p-6 rounded-xl border shadow-md w-full',
               isPremium ? 'bg-blue-500 text-white' : 'bg-gray-50 text-black']">
    <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
    <div class="text-4xl mb-4">
      <slot name="icon" />
    </div>
    <p class="text-2xl font-bold mb-4">${{ price }}</p>
    <ul class="text-sm space-y-2 mb-6">
      <li v-for="(item, index) in features" :key="index">• {{ item }}</li>
    </ul>
    <button class="bg-blue-200 text-black font-semibold px-4 py-2 rounded hover:bg-blue-300 w-full">
      訂閱
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  price: String,
  features: Array,
  isPremium: Boolean
})
</script>
