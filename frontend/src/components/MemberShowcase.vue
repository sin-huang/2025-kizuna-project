<template>
  <div class="bg-white">
    <section class="py-12 mt-16 mb-12 text-center">
      <h1 class="text-2xl font-medium md:text-3xl">
        在 <span class="font-serif italic">Kizuna</span> 開始你的連結旅程
      </h1>
      <p class="mt-2 text-gray-600">找到聊得來的夥伴，讓每一次配對更有意義。</p>

      <!-- 卡片區塊 -->
      <div
        class="flex items-center justify-center gap-6 px-4 mt-8 overflow-x-auto"
      >
        <div
          v-for="i in 4"
          :key="i"
          class="relative w-48 h-64 overflow-hidden shadow-lg rounded-xl"
        >
          <img
            src="/people.jpg"
            alt="User photo"
            class="object-cover w-full h-full"
          />

          <!-- 漸層疊加 -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          ></div>

          <!-- 姓名 -->
          <div class="absolute text-lg font-bold text-white bottom-4 left-4">
            <p>Jhon</p>
            <p>Osteen</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 建立帳號 -->
    <section class="py-12 mt-8 text-center bg-[#C0D7EC]">
      <p class="mb-4 text-lg italic text-gray-700">
        We’re here to make every connection count, starting with your event.
      </p>
      <button
        class="px-6 py-2 text-sm text-white bg-[#7395BA] rounded-full hover:bg-[#5E7CA0] md:text-base"
      >
        建立帳號
      </button>
    </section>
  </div>
</template>
