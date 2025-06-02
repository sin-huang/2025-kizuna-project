
<script setup>
import { checkout } from "@/api/useSubscription.js";

const plans = [
  {
    name: "免費會員",
    price: 20,
    key: "免費",
    description: "基礎交友功能",
  },
  {
    name: "付費會員",
    price: 299,
    key: "付費",
    description: "解鎖付費功能",
  },
];
</script>




<template>
  <div class="space-y-4">
    <div
      v-for="plan in plans"
      :key="plan.name"
      class="flex items-center justify-between p-4 border rounded-lg shadow"
    >
      <div>
        <h2 class="text-xl font-semibold">
          {{ plan.name }} ${{ plan.price }}/月
        </h2>
        <p class="text-gray-600">{{ plan.description }}</p>
      </div>
      <button
        class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        @click="checkout(plan.key)"
      >
        訂閱
      </button>
    </div>
  </div>
</template>
