<template>
  <header class="text-white bg-[#7395BA] shadow-md">
    <nav class="flex items-center justify-between px-6 py-4">
      <!-- 左側 -->
      <div class="flex items-center">
        <RouterLink to="/" class="text-2xl italic font-light leading-none">
          Kizuna
        </RouterLink>
      </div>

      <!-- 中間 -->
      <div class="flex justify-center flex-1 space-x-4">
        <RouterLink
          to="?"
          class="p-4 text-lg leading-none transition hover:text-gray-300"
        >
          參與活動
        </RouterLink>

        <RouterLink
          to="?"
          class="p-4 text-lg leading-none transition hover:text-gray-300"
        >
          開始滑滑
        </RouterLink>

        <RouterLink
          to="/product"
          class="p-4 text-lg leading-none transition hover:text-gray-300"
        >
          購買禮物
        </RouterLink>

        <RouterLink
          to="/product"
          class="p-4 text-lg leading-none transition hover:text-gray-300"
        >
          解鎖升級
        </RouterLink>
      </div>

      <!-- 右側 -->
      <div class="flex items-center space-x-4">
        <RouterLink
          to="/cart"
          class="text-lg leading-none transition hover:text-gray-300"
        >
          購物車
        </RouterLink>

        <div class="relative">
          <div
            class="flex items-center justify-center w-12 h-12 text-sm font-bold bg-white rounded-full text-[#7395BA]"
            @click="toggleDropdown"
          >
            {{ store.username }}
          </div>

          <div
            v-if="isDropdownOpen"
            class="absolute right-0 w-40 mt-2 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <a
              href="#"
              class="block px-4 py-4 pb-2 text-gray-600 border-b border-gray-300 hover:bg-gray-100"
              >編輯個人頁面</a
            >
            <a
              href="#"
              class="block px-4 py-4 pb-2 text-gray-600 border-b border-gray-300 hover:bg-gray-100"
              @click="handleLogout"
              >登出</a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main class="max-w-[1000px] mx-auto mt-24">
    <RouterView />
  </main>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "@/stores/user";
import router from "@/router";
const store = useUserStore();

const handleLogout = () => {
  store.logout();
  alert("已登出");
  router.push("/login");
};

// 控制下拉框的顯示與隱藏
const isDropdownOpen = ref(false);

// 切換下拉框顯示狀態
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// 點擊其他地方關閉下拉框
const closeDropdown = (event) => {
  if (!event.target.closest(".relative")) {
    isDropdownOpen.value = false;
  }
};

// 在組件掛載時添加全局點擊事件監聽器
onMounted(() => {
  window.addEventListener("click", closeDropdown);
});

// 組件卸載時移除事件監聽器
onUnmounted(() => {
  window.removeEventListener("click", closeDropdown);
});
</script>
<style></style>
