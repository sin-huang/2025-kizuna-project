<template>
  <section class="py-12 mt-16 mb-12 text-center">
    <h1 class="text-2xl font-medium md:text-3xl">
      在 <span class="font-serif italic">Kizuna</span> 開始你的連結旅程
    </h1>
    <p class="mt-2 text-gray-600">找到聊得來的夥伴，讓每一次配對更有意義。</p>
    <div class="w-full px-16 mt-12 mb-14">
      <div class="relative flex justify-center max-w-[1100px] w-full mx-auto">
        <Swiper
          class="max-w-[1100px] w-full"
          :modules="[Autoplay, Navigation]"
          :slides-per-view="5"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :breakpoints="{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <SwiperSlide v-for="(member, index) in members" :key="index">
            <MemberCard
              :photo="member.photo"
              :firstName="member.firstName"
              :lastName="member.lastName"
            />
          </SwiperSlide>
        </Swiper>

        <!-- 白色箭頭按鈕 -->
        <div
          class="absolute z-10 flex items-center justify-center w-10 h-10 transition -translate-y-1/2 rounded-full cursor-pointer custom-swiper-button-prev top-1/2 -left-24 bg-black/40 hover:bg-black/70"
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
          class="absolute z-10 flex items-center justify-center w-10 h-10 transition -translate-y-1/2 rounded-full cursor-pointer custom-swiper-button-next top-1/2 -right-24 bg-black/40 hover:bg-black/70"
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
      </div>
    </div>
  </section>

  <!-- 建立帳號 -->
  <div class="py-12 mt-8 text-center bg-[#C0D7EC]">
    <p class="mb-4 text-lg italic text-gray-700">
      We’re here to make every connection count, starting with your event.
    </p>
    <button
      class="px-6 py-2 text-sm text-white bg-[#7395BA] rounded-full hover:bg-[#5E7CA0] md:text-base"
    >
      建立帳號
    </button>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import MemberCard from "./MemberCard.vue";

const members = [
  { photo: "/people.jpg", firstName: "Jhon", lastName: "Osteen" },
  { photo: "/people.jpg", firstName: "Anna", lastName: "Lee" },
  { photo: "/people.jpg", firstName: "Tom", lastName: "Chang" },
  { photo: "/people.jpg", firstName: "May", lastName: "Chen" },
  { photo: "/people.jpg", firstName: "David", lastName: "Wang" },
  { photo: "/people.jpg", firstName: "Lisa", lastName: "Lin" },
  { photo: "/people.jpg", firstName: "Mike", lastName: "Huang" },
  { photo: "/people.jpg", firstName: "Sandy", lastName: "Liu" },
];
</script>
