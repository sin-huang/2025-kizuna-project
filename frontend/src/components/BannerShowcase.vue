<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: "Kizuna",
  },
  subtitle: {
    type: String,
    default: "by Team",
  },
  authorText: {
    type: String,
    default: "創作者介紹",
  },
  modelImage: {
    type: String,
    default: "/images/model.png",
  },
});

const screenWidth = ref(window.innerWidth);

const updateWidth = () => {
  screenWidth.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});
const zDistance = computed(() => {
  if (screenWidth.value < 768) return 180;
  if (screenWidth.value < 1024) return 300;
  return 550;
});
const sliderSize = computed(() => {
  if (screenWidth.value < 768) return "w-[100px] h-[150px]";
  if (screenWidth.value < 1024) return "w-[160px] h-[200px]";
  return "w-[200px] h-[250px]";
});
const titleSize = computed(() => {
  if (screenWidth.value < 768) return "text-[5em]";
  if (screenWidth.value < 1024) return "text-[7em]";
  return "text-[16em]";
});
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden text-center">
    <!-- 3D Slider -->
    <div
      class="absolute z-20"
      :class="sliderSize"
      :style="{
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px)',
        animation: 'autoRun 20s linear infinite',
        top: '10%',
        left: '50%',
        transformOrigin: 'center',
        translate: '-50% 0',
      }"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="absolute inset-0"
        :style="{
          transform: `rotateY(${
            index * (360 / items.length)
          }deg) translateZ(${zDistance}px)`,
        }"
      >
        <img :src="item" class="object-cover w-full h-full" />
      </div>
    </div>

    <!-- Model background -->
    <div
      class="absolute bottom-0 left-0 w-full h-[75vh] bg-no-repeat bg-top bg-contain z-10"
      :style="{
        backgroundImage: `url(${modelImage})`,
        backgroundSize: 'auto 130%',
      }"
    />

    <!-- Text Content -->
    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] pb-[100px] flex flex-wrap justify-between items-center z-10 px-4"
    >
      <h1
        class="relative font-[ICA Rubrik] leading-[1em] text-[#25283B] w-full lg:w-auto text-center md:text-left"
        :class="titleSize"
        :data-content="title"
      >
        {{ title }}
        <span
          class="absolute inset-0 text-transparent"
          :style="{
            WebkitTextStroke: '2px #d2d2d2',
            zIndex: 2,
          }"
          >{{ title }}</span
        >
      </h1>
      <div class="text-right font-poppins hidden md:block max-w-[200px]">
        <h2 class="text-[3em]">{{ subtitle }}</h2>
        <p>{{ authorText }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/ica-rubrik-black");
@import url("https://fonts.cdnfonts.com/css/poppins");

@keyframes autoRun {
  from {
    transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
  }
  to {
    transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
  }
}
</style>
