<script setup>
defineProps({
  title: String,
  icon: Object,
  price: String,
  features: Array
});
</script>


<template>
  <div
    class="flex flex-col justify-between w-full max-w-sm p-6 shadow bg-primary-200 group rounded-xl hover:bg-primary-100"
  >
    <div class="flex flex-col items-center text-center">
      <h2 class="mb-4 text-xl font-bold group-hover:text-white">{{ title }}</h2>
      <div class="mb-4 text-5xl transition text-primary-800 group-hover:text-white">
      <i class="fa-regular fa-user"></i>
</div>
      <p class="mb-4 text-2xl font-bold group-hover:text-white">{{ price }}</p>
      <ul class="w-full space-y-1 text-left list-disc list-inside group-hover:text-white">
        <li v-for="(feature, index) in features" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>
    <button
      class="py-2 mt-6 rounded bg-primary-100 group-hover:bg-primary-200"
    >
      訂閱
    </button>
  </div>
</template>
