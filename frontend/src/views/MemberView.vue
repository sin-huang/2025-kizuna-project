<script setup>
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import axios from "@/api/axios";

const userStore = useUserStore();
const router = useRouter();

const goSubscribe = () => {
  router.push("/subscribe");
};

// ✅ 一進入會員中心頁面就 call /api/me 更新訂閱狀態
onMounted(async () => {
  try {
    const res = await axios.get("/api/me", {
      headers: {
        Authorization: `Bearer ${userStore.accessToken}`,
      },
    });
    const plan = res.data.user.subscription_plan;
    userStore.setSubscription(plan);
  } catch (error) {
    console.error("⚠️ 無法取得會員資料", error);
  }
});
</script>

<template>
  <div class="max-w-lg p-6 mx-auto">
    <h2 class="mb-4 text-2xl font-bold">會員中心</h2>
    <p class="mb-2">使用者名稱：{{ userStore.username }}</p>
    <p class="mb-4">
      訂閱方案：
      <span>{{ userStore.subscriptionPlan }}</span>
    </p>
    <button
      @click="goSubscribe"
      class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-800"
    >
      查看訂閱方案
    </button>
  </div>
</template>
