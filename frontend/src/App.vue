<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "./stores/user";
import router from "./router";
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); // 動畫時間
});
</script>

<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex items-center justify-center font-sans bg-black"
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

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