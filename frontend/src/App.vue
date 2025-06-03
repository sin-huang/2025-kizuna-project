<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "./stores/user";
import router from "./router";
import { ref, onMounted } from "vue";
import HeroSection from "./components/HeroSection.vue"; // 你自己的主畫面內容元件

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); // 動畫時間稍微長一點
});

const store = useUserStore();

const handleLogout = () => {
  store.logout();
  alert("已登出");
  router.push("/login");
};
</script>

<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black"
  >
    <svg
      viewBox="0 0 800 200"
      class="w-[600px] h-auto"
      fill="none"
      stroke="white"
      stroke-width="2"
    >
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="150"
        font-family="'Baloo 2', cursive"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-dasharray="1500"
        stroke-dashoffset="1500"
        class="animate-draw"
      >
        KIZUNA
      </text>
    </svg>
  </div>

  <main v-else>
    <RouterView />
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fill-in {
  from {
    fill: transparent;
  }
  to {
    fill: white;
  }
}

.animate-draw {
  animation: draw 2.5s ease-in-out forwards;
}

.fill-in-delay {
  animation: fill-in 1s ease-in-out forwards;
  animation-delay: 2.5s;
}
</style>

<!-- <template>
  <header class="text-white bg-blue-900 shadow-md">
    <nav class="flex justify-start">
      <RouterLink to="/" class="p-6 text-lg transition hover:text-gray-300"
        >首頁</RouterLink
      >
      <RouterLink
        to="/product"
        class="p-6 text-lg transition hover:text-gray-300"
        >商品列表</RouterLink
      >
      <RouterLink to="/cart" class="p-6 text-lg transition hover:text-gray-300"
        >購物車</RouterLink
      > -->
<!-- 有token 代表已經登入 所以只剩登出按鈕 -->
<!-- <template v-if="store.accessToken">
        <button
          @click="handleLogout"
          class="p-6 text-lg transition hover:text-gray-300"
        >
          登出
        </button>
        <div class="p-6 text-lg transition hover:text-gray-300">
          目前登入帳號為 : -->
<!-- ml-2表示 margin-left加上0.5rem的間距 -->
<!-- <span class="ml-2">{{ store.username }}</span>
        </div>
      </template> -->
<!-- 沒有token 請先登入或註冊新帳號 -->
<!-- <template v-else>
        <RouterLink
          to="/login"
          class="p-6 text-lg transition hover:text-gray-300"
          >登入</RouterLink
        >
        <RouterLink
          to="/register"
          class="p-6 text-lg transition hover:text-gray-300"
          >註冊</RouterLink
        >
      </template>
    </nav>
  </header>
  <main> -->
<!-- 原本的 main class="max-w-[1000px] mx-auto mt-24" -->
<!-- <RouterView />
  </main>
</template> -->
