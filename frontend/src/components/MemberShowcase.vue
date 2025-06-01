<template>
  <section class="py-12 mt-16 mb-12 text-center">
    <h1 class="text-2xl font-medium md:text-3xl">
      在 <span class="font-serif italic">Kizuna</span> 開始你的連結旅程
    </h1>
    <p class="mt-2 text-gray-600">找到聊得來的夥伴，讓每一次配對更有意義。</p>

    <!-- 無限滑動區塊 -->
    <div class="relative w-[1292px] mt-12 overflow-hidden mx-auto">
      <div
        class="flex justify-center gap-5 animate-slide group-hover:pause-slide"
        :style="{ animationDuration: animationDuration + 's' }"
      >
        <!-- 兩輪卡片實現無縫滑動 -->
        <template v-for="repeat in 2" :key="repeat">
          <div
            v-for="(member, index) in members"
            :key="`${repeat}-${index}`"
            class="flex-shrink-0"
          >
            <MemberCard
              :photo="member.photo"
              :firstName="member.firstName"
              :lastName="member.lastName"
            />
          </div>
        </template>
      </div>
    </div>
  </section>

  <!-- 建立帳號區塊 -->
  <div class="py-16 mt-8 text-center bg-primary">
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
import MemberCard from "./MemberCard.vue";

const animationDuration = 40; // 調整數字改變滑動速度，越大越慢

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

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-slide {
  animation: slide linear infinite;
  width: max-content;
}

.group-hover\:pause-slide:hover {
  animation-play-state: paused;
}
</style>
