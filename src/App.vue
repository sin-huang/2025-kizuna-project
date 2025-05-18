<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "./stores/user";
import router from "./router";
const store = useUserStore();

const handleLogout = () => {
  store.logout();
  alert('已登出');
  router.push('/login');
}

</script>

<template>
  <header class="bg-blue-900 text-white shadow-md">
    <nav class="flex justify-start">
      <RouterLink to="/" class="p-6 text-lg hover:text-gray-300 transition">首頁</RouterLink>
      <RouterLink to="/product" class="p-6 text-lg hover:text-gray-300 transition">商品列表</RouterLink>
      <RouterLink to="/cart" class="p-6 text-lg hover:text-gray-300 transition">購物車</RouterLink>
      <!-- 有token 代表已經登入 所以只剩登出按鈕 -->
      <template v-if="store.accessToken">
        <button @click="handleLogout" class="p-6 text-lg hover:text-gray-300 transition">登出</button>
      </template>
      <!-- 沒有token 請先登入或註冊新帳號 -->
      <template v-else>
        <RouterLink to="/login" class="p-6 text-lg hover:text-gray-300 transition">登入</RouterLink>
        <RouterLink to="/register" class="p-6 text-lg hover:text-gray-300 transition">註冊</RouterLink>
      </template>
    </nav>
  </header>
  <main class="max-w-[1000px] mx-auto mt-24 ">
    <RouterView />
  </main>
</template>

<style>
</style>
