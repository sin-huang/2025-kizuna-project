<template>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- 背景影片 -->
    <video
      class="absolute inset-0 z-0 object-cover w-full h-full"
      src="/hero1.mp4"
      autoplay
      muted
      loop
      playsinline
    ></video>

    <!-- 漸層遮罩 -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-[1]"
    ></div>

    <!-- 文字區塊 -->
    <div
      class="absolute inset-0 z-[2] flex flex-col justify-center h-full px-6 text-left text-white md:pl-[10%] md:items-start md:max-w-[50%] items-center text-center md:text-left"
    >
      <h1
        class="mb-6 text-5xl md:text-8xl font-extrabold leading-tight md:leading-[1.2] tracking-wide"
      >
        因絆而遇<br />
        為真誠而來
      </h1>
      <p class="mb-8 text-xl leading-relaxed md:text-2xl drop-shadow-sm">
        <span class="font-bold text-primary">Real connections,</span>
        <span class="font-bold text-accent"> heartfelt beginnings.</span>
      </p>
      <button
        class="relative px-16 py-4 overflow-hidden text-xl font-semibold text-black transition duration-300 bg-white rounded-full hover:scale-105"
      >
        <!-- 中文＋英文 -->
        <span class="relative z-10">
          開始旅程<br />
          <small class="text-sm font-normal">Get Started</small>
        </span>

        <!-- 底色滑動層 -->
        <span
          class="absolute inset-0 bg-[#fb8500] translate-y-full transition-transform duration-300 ease-in-out rounded-full opacity-0"
        ></span>
      </button>
    </div>
  </section>
</template>

<style scoped>
button:hover > span:last-child {
  transform: translateY(0);
  opacity: 1;
}

button:hover > span:first-child {
  color: white;
  position: relative;
  z-index: 20;
}

button:hover > span:last-child {
  transform: translateY(0);
  opacity: 1;
}
</style>
