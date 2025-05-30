<template>
  <div class="h-[400px] flex flex-col overflow-hidden rounded-lg shadow">
    <!-- 上半部：活動圖片 -->
    <div class="w-full h-2/3">
      <lazy-image
        src="/party.jpg"
        alt="event image"
        class="object-cover w-full h-full"
      />
    </div>

    <!-- 下半部：活動資訊 -->
    <div class="px-3 py-2 text-sm text-gray-800 bg-white h-1/3">
      <div class="text-xl font-bold truncate">
        {{ event.title }}
      </div>
      <p class="truncate">時間：{{ event.time }}</p>
      <p class="truncate">地點：{{ event.location }}</p>
    </div>
  </div>
</template>

<script setup>
import LazyImage from "./LazyImage.vue";
import { defineProps } from "vue";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>
