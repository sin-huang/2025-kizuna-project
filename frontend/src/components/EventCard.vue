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
    <div class="absolute inset-0 bg-black/50" />

    <!-- 活動資訊浮出 -->
    <div
      class="absolute bottom-0 left-0 w-full px-5 py-4 text-white z-10 transition-transform duration-500 group-hover:scale-[1.02] flex"
    >
      <!-- 左邊：日期 -->
      <div class="w-40 text-4xl font-bold leading-snug text-center text-white">
        <div>{{ month }}</div>
        <div>{{ day }}</div>
        <div class="text-2xl text-white/80">{{ hour }}</div>
      </div>

      <!-- 右邊：活動資訊 -->
      <div class="flex-1 pl-4">
        <h3 class="mb-1 text-6xl font-bold text-white truncate drop-shadow">
          {{ event.title }}
        </h3>
        <p class="text-lg text-white/80">{{ event.area }}</p>
        <p class="text-3xl text-white/80">{{ event.venue }}</p>
      </div>
    </div>

    <!-- Hover 色塊遮罩 -->
    <div
      class="absolute bottom-0 left-0 z-0 w-full h-1/3 bg-gradient-to-t from-[#fb8500] to-transparent scale-0 opacity-0 rounded-t-full transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 group-hover:rounded-none"
      style="transform-origin: bottom center;"
    />
  </router-link>
</template>
