<script setup>
defineProps({
  title: String,
  icon: String,
  price: String,
  features: Array
});
</script>


<template>
  <div
    class="flex flex-col justify-between w-full max-w-sm p-6 transition bg-white shadow rounded-xl hover:bg-blue-100"
  >
    <div class="flex flex-col items-center text-center">
      <h2 class="mb-4 text-xl font-bold">{{ title }}</h2>
      <div class="mb-4 text-5xl">
        {{ icon }}
      </div>
      <p class="mb-4 text-2xl font-bold">{{ price }}</p>
      <ul class="w-full space-y-1 text-left text-gray-600 list-disc list-inside">
        <li v-for="(feature, index) in features" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>
    <button
      class="py-2 mt-6 text-white bg-blue-300 rounded hover:bg-blue-400"
    >
      訂閱
    </button>
  </div>
</template>
