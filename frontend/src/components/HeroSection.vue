<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const slides = [
  "/hero.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
];
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- Swiper 幻燈片背景 -->
    <Swiper
      class="absolute inset-0 z-0 w-full h-full"
      :modules="[Autoplay, EffectFade]"
      effect="fade"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :slides-per-view="1"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full h-full"
      >
        <img
          :src="slide"
          alt="Hero Slide"
          class="object-cover object-center w-full h-full"
        />
      </SwiperSlide>
    </Swiper>

    <!-- 黑色遮罩 -->
    <div class="absolute inset-0 bg-black/40 z-[1]"></div>

    <!-- 文字區塊 -->
    <div
      class="absolute inset-0 z-[2] flex flex-col items-center justify-center w-full h-full max-w-screen-md px-4 mx-auto text-center text-white"
    >
      <h1 class="mb-8 text-3xl font-bold md:text-5xl">
        因絆相識，為認真的相遇而來
      </h1>
      <p class="mb-6 text-lg md:text-xl">
        聊得來的朋友，走得近的關係。
        <br />
        Kizuna 讓你在誠意中找到連結，開啟屬於你的關係故事。
      </p>
      <div class="space-x-4">
        <button
          class="px-6 py-2 text-sm text-white bg-[#7395BA] rounded-full hover:bg-[#5E7CA0] md:text-base"
        >
          開始旅程
        </button>
      </div>
    </div>
  </section>
</template>
