<template>
  <div class="container py-10 mx-auto">
    <h2 class="mb-6 text-2xl font-bold">會員中心</h2>

    <div v-if="!user">
      <p class="text-gray-500">載入中...</p>
    </div>

    <div v-else class="p-6 space-y-3 bg-white rounded shadow">
      <p><strong>👤 使用者名稱：</strong> {{ user.username }}</p>
      <p><strong>📛 訂閱狀態：</strong>
        <template v-if="subscription">
          <span class="text-blue-600">{{ subscription.plan }} ({{ subscription.status }})</span>
        </template>
        <template v-else>
          <span class="text-gray-500">尚未訂閱</span>
        </template>
      </p>
      <p v-if="subscription?.paid_at"><strong>💰 付款時間：</strong> {{ formatDate(subscription.paid_at) }}</p>
    </div>
  </div>
</template>

<script setup>
import axios from "@/api/axios";
import { ref, onMounted } from "vue";

const user = ref(null);
const subscription = ref(null);

onMounted(async () => {
  try {
    const res = await axios.get("/api/member/info");
    user.value = res.data.user;
    subscription.value = res.data.subscription;
  } catch (err) {
    alert("會員資料載入失敗！");
    console.error(err);
  }
});

function formatDate(datetime) {
  return new Date(datetime).toLocaleString("zh-TW");
}
</script>
