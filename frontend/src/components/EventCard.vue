<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

// 安全拆解時間字串
const [month, dayTime] = props.event?.time?.split?.("/") ?? ["", ""];
const [day, hour] = dayTime?.split?.(" ") ?? ["", ""];
</script>

<template>
  <router-link
    v-if="event && event.time"
    :to="`/events/${event.id}`"
    class="block group relative h-[420px] rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition duration-300"
  >
    <!-- 活動圖片 -->
    <img
      :src="event.image || '/default.jpg'"
      alt="event image"
      class="object-cover w-full h-full"
    />

    <!-- 黑色遮罩 -->
    <div class="absolute inset-0 bg-black/30" />

    <!-- 活動資訊浮出 -->
    <div
       class="absolute bottom-0 left-0 w-full px-5 py-4 text-white z-10 transition-transform duration-500 group-hover:scale-[1.02] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6"
    >
      <!-- 左邊：日期 -->
      <div class="w-full leading-tight text-center sm:w-32 sm:text-left">
  <div class="text-2xl font-bold sm:text-3xl">{{ month }}</div>
  <div class="text-4xl font-bold sm:text-5xl">{{ day }}</div>
  <div class="text-lg font-bold sm:text-xl text-white/80">{{ hour }}</div>
</div>

      <!-- 右邊：活動資訊 -->
      <div class="flex-1 w-full">
  <h3
    class="mb-1 text-2xl font-bold leading-snug tracking-wide truncate sm:text-3xl drop-shadow"
  >
    {{ event.title }}
  </h3>
  <p class="text-base sm:text-xl text-white/80">{{ event.venue }}</p>
</div>
    </div>

    <!-- Hover 色塊遮罩 -->
    <div
      class="absolute bottom-0 left-0 z-0 w-full transition-all duration-700 ease-out origin-bottom scale-y-0 translate-y-4 opacity-0 h-2/5 blur-sm group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 group-hover:blur-0"
      style="background-image: linear-gradient(to top, black, transparent)"
    />
  </router-link>
</template>
