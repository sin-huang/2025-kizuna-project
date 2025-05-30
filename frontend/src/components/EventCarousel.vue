<template>
  <div class="mb-2 text-center">
    <p class="mt-12 text-sm text-gray-500">Your weekend starts here</p>
    <h2 class="mt-3 mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
      最新聚會
    </h2>
    <p class="text-base text-gray-600">快來看看哪些活動適合你參加</p>
  </div>
  <div class="relative w-full px-16 mt-12 mb-14">
    <Swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="4"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 4000 }"
      :navigation="{
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
      }"
      :breakpoints="{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }"
    >
      <SwiperSlide v-for="event in events" :key="event.id">
        <EventCard :event="event" />
      </SwiperSlide>

      <!-- 白色箭頭按鈕 -->
      <div
        class="absolute z-10 flex items-center justify-center w-10 h-10 transition -translate-y-1/2 rounded-full cursor-pointer custom-swiper-button-prev top-1/2 left-2 bg-black/40 hover:bg-black/70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline
            points="15 18 9 12 15 6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        class="absolute z-10 flex items-center justify-center w-10 h-10 transition -translate-y-1/2 rounded-full cursor-pointer custom-swiper-button-next top-1/2 right-2 bg-black/40 hover:bg-black/70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline
            points="9 18 15 12 9 6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </Swiper>
  </div>
  <div class="flex justify-center mt-8 mb-8">
    <button
      class="px-6 py-2 text-sm text-white bg-[#7395BA] rounded-full hover:bg-[#5E7CA0] md:text-base"
    >
      立即報名
    </button>
  </div>
  <br />
  <br />
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import EventCard from "./EventCard.vue";

const events = [
  {
    id: 1,
    title: "桌遊之夜",
    time: "2025/06/15（六）19:00",
    location: "台北市中山區桌遊咖啡廳",
  },
  {
    id: 2,
    title: "一起去爬山",
    time: "2025/06/16（日）08:00",
    location: "陽明山擎天崗",
  },
  {
    id: 3,
    title: "週末下午茶",
    time: "2025/06/22（六）14:30",
    location: "信義區某甜點店",
  },
  {
    id: 4,
    title: "城市散步",
    time: "2025/06/23（日）16:00",
    location: "大稻埕碼頭集合",
  },
  {
    id: 5,
    title: "音樂分享會",
    time: "2025/07/01（二）18:00",
    location: "台北市音樂工作坊",
  },
  {
    id: 6,
    title: "戶外野餐日",
    time: "2025/07/06（日）10:30",
    location: "大安森林公園",
  },
];
</script>
