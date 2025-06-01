<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// 用 Heroicons 或你喜歡的圖庫（這裡範例用簡單 SVG component）
const cards = [
  {
    title: "有趣的活動",
    desc: "找不到想參加的活動？沒關係，自己發起也行！和同好一起展開精彩聚會。",
    bg: "bg-secondary",
  },
  {
    title: "即時聊天",
    desc: "配對成功後立刻開啟專屬聊天室，輕鬆交流、不再錯過緣分。",
    bg: "bg-darkblue",
  },
  {
    title: "智能配對",
    desc: "依你的興趣與行為推薦合適對象，主動邀請你互動、建立連結。",
    bg: "bg-orange",
  },
];
</script>

<template>
  <section
    class="flex flex-col items-center justify-between w-full min-h-screen gap-12 px-6 bg-white md:flex-row py-36 text-darkblue"
  >
    <!-- 左側標題 -->
    <div class="w-full space-y-8 text-left md:w-1/2">
      <h2 class="text-4xl font-bold tracking-tight md:text-6xl">
        為什麼選擇我們？
        <br />
        <span
          class="block pt-2 pb-2 mt-4 text-4xl font-semibold text-primary md:text-5xl md:pt-3 md:pb-3"
        >
          在這裡，找到真正契合的人
        </span>
      </h2>
      <p class="text-lg italic text-gray-500">
        Why choose us? More than just matches — we create meaningful connections
        that start from shared experiences.
      </p>
      <p class="text-base text-gray-600">
        不知道從哪開始也沒關係，我們讓你輕鬆踏出第一步。加入有趣的活動、展開即時對話、認識對的人，讓每一次相遇都更有意義。
      </p>
    </div>

    <!-- 右側卡片 Swiper -->
    <div class="w-full md:w-1/2">
      <Swiper
        :modules="[Autoplay]"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        grabCursor
        class="w-full"
        :breakpoints="{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }"
      >
        <SwiperSlide v-for="(card, index) in cards" :key="index">
          <div
            class="p-6 text-white transition duration-300 shadow-md rounded-2xl hover:scale-105"
            :class="card.bg"
          >
            <div class="mb-4">
              <!-- SVG icons by index -->
              <svg
                v-if="index === 0"
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="currentColor"
              >
                <path
                  d="M120-566q0-90 40-165t107-125l36 48q-56 42-89.5 104.5T180-566h-60Zm660 0q0-75-33.5-137.5T657-808l36-48q67 50 107 125t40 165h-60ZM160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v22q81 17 130.5 83.5T720-564v304h80v60H160Zm320-302Zm0 422q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM300-260h360v-304q0-75-52.5-127.5T480-744q-75 0-127.5 52.5T300-564v304Z"
                />
              </svg>

              <svg
                v-else-if="index === 1"
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="currentColor"
              >
                <path
                  d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"
                />
              </svg>

              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="currentColor"
              >
                <path
                  d="M474-486q26-32 38.5-66t12.5-79q0-45-12.5-79T474-776q76-17 133.5 23T665-631q0 82-57.5 122T474-486Zm216 326v-94q0-51-26-95t-90-74q173 22 236.5 64T874-254v94H690Zm110-289v-100H700v-60h100v-100h60v100h100v60H860v100h-60Zm-485-32q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM0-160v-94q0-35 18.5-63.5T68-360q72-32 128.5-46T315-420q62 0 118 14t128 46q31 14 50 42.5t19 63.5v94H0Zm315-381q39 0 64.5-25.5T405-631q0-39-25.5-64.5T315-721q-39 0-64.5 25.5T225-631q0 39 25.5 64.5T315-541ZM60-220h510v-34q0-16-8-30t-25-22q-69-32-117-43t-105-11q-57 0-104.5 11T92-306q-15 7-23.5 21.5T60-254v34Zm255-411Zm0 411Z"
                />
              </svg>
            </div>

            <div class="mb-2 text-xl font-semibold">{{ card.title }}</div>
            <p class="text-sm leading-relaxed">{{ card.desc }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
