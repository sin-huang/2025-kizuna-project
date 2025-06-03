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
    <div class="absolute inset-0 bg-black/40" />

    <!-- 活動資訊浮出 -->
    <div
      class="absolute bottom-0 left-0 w-full px-5 py-4 text-white z-10 transition-transform duration-500 group-hover:scale-[1.02] flex items-center gap-6"
    >
      <!-- 左邊：日期 -->
      <div class="w-32 leading-tight text-center">
        <div class="text-3xl font-bold">{{ month }}</div>
        <div class="text-5xl font-bold">{{ day }}</div>
        <div class="text-xl font-bold text-white/80">{{ hour }}</div>
      </div>

      <!-- 右邊：活動資訊 -->
      <div class="flex-1">
        <h3
          class="mb-1 text-3xl font-bold leading-snug tracking-wide truncate drop-shadow"
        >
          {{ event.title }}
        </h3>
        <!-- <p class="text-lg text-white/80">{{ event.area }}</p> -->
        <p class="text-xl text-white/80">{{ event.venue }}</p>
      </div>
    </div>

    <!-- Hover 色塊遮罩 -->
    <div
      class="absolute bottom-0 left-0 z-0 w-full transition-all duration-700 ease-out origin-bottom scale-y-0 translate-y-4 opacity-0 h-2/5 blur-sm group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 group-hover:blur-0"
      style="background-image: linear-gradient(to top, #ffb703, transparent)"
    />
  </router-link>
</template>
