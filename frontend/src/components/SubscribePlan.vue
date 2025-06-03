<script setup>
import { onMounted, ref } from "vue";
import axios from "@/api/axios";
import { checkout } from "@/api/useSubscription.js";

// 用來存從資料庫抓到的方案
const plans = ref([]);

// 畫面一進來就抓方案
onMounted(async () => {
  try {
    const res = await axios.get("/api/subPlans");
    plans.value = res.data; // 這裡預期是陣列，每筆像 { id, name, price }
  } catch (error) {
    console.error("❌ 無法取得訂閱方案", error);
  }
});
</script>

<template>
  <div class="max-w-xl p-4 mx-auto space-y-4">
    <h1 class="mb-4 text-2xl font-bold">訂閱方案</h1>
    <div
      v-for="plan in plans"
      :key="plan.id"
      class="flex items-center justify-between p-4 border rounded-lg shadow"
    >
      <div>
        <h2 class="text-xl font-semibold">
          {{ plan.name }} ${{ plan.price }}/月
        </h2>
        <p class="text-gray-600">
          {{ plan.description || "尚未填寫描述" }}
        </p>
      </div>
      <button
      class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      @click="checkout(plan.id)" 
      >
        訂閱
      </button>
    </div>
  </div>
</template>
