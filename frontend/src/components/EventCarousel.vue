<script setup>
import { ref } from "vue";

const events = ref([
  {
    title: "桌遊聚會",
    date: "05/25（日）",
    city: "台北",
    image: "/party.jpg",
  },
  {
    title: "戶外烤肉",
    date: "06/02（六）",
    city: "新竹",
    image: "/party.jpg",
  },
  {
    title: "電影之夜",
    date: "06/10（一）",
    city: "高雄",
    image: "/party.jpg",
  },
  {
    title: "輕旅行郊遊",
    date: "06/15（六）",
    city: "台中",
    image: "/party.jpg",
  },
  {
    title: "攝影交流會",
    date: "06/20（四）",
    city: "台南",
    image: "/party.jpg",
  },
  {
    title: "手作工藝坊",
    date: "06/25（六）",
    city: "台北",
    image: "/party.jpg",
  },
]);
const carousel = ref(null);
const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  }
};
const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <section class="py-16">
    <div class="mb-8 text-center">
      <p class="mb-4 text-gray-600">Your weekend starts here</p>
      <h2 class="mb-4 text-2xl font-bold md:text-3xl">最新聚會</h2>
      <p class="mb-4 text-gray-600">找找最近適合你的聚會活動</p>
    </div>

    <div class="relative max-w-6xl px-4 mx-auto overflow-hidden">
      <!-- 卡片區塊 -->
      <div
        ref="carousel"
        class="flex space-x-4 overflow-x-auto transition-transform scrollbar-hide snap-x snap-mandatory"
      >
        <div
          v-for="(event, index) in events"
          :key="index"
          class="min-w-[250px] max-w-sm bg-white rounded-lg shadow-md snap-center shrink-0"
        >
          <img
            :src="event.image"
            :alt="event.title"
            class="object-cover w-full h-40 rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="mb-1 text-lg font-semibold">{{ event.title }}</h3>
            <p class="text-sm text-gray-600">
              {{ event.date }}・{{ event.city }}
            </p>
          </div>
        </div>
      </div>
      <!-- 左右按鈕 -->
      <button
        @click="scrollLeft"
        class="absolute z-20 p-2 -translate-y-1/2 bg-white rounded-full shadow left-1 top-1/2 hover:bg-gray-100"
      >
        ←
      </button>
      <button
        @click="scrollRight"
        class="absolute z-20 p-2 -translate-y-1/2 bg-white rounded-full shadow right-1 top-1/2 hover:bg-gray-100"
      >
        →
      </button>
    </div>
    <div class="flex justify-center mt-16 mb-12">
      <button
        class="px-6 py-2 text-sm text-white bg-[#7395BA] rounded-full hover:bg-[#5E7CA0] md:text-base"
      >
        立即報名
      </button>
    </div>
  </section>
</template>
