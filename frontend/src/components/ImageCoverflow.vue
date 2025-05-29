<template>
  <div class="w-full py-12 mx-auto" :class="containerClass">
    <swiper
      :modules="[EffectCoverflow, Pagination, Autoplay]"
      effect="coverflow"
      grab-cursor
      centered-slides
      slides-per-view="auto"
      :coverflow-effect="coverflowOptions"
      :autoplay="
        autoplay ? { delay: 3000, disableOnInteraction: false } : false
      "
      :pagination="{ clickable: true }"
      @slideChange="onSlideChange"
      class="h-[600px]"
    >
      <swiper-slide
        v-for="(img, i) in images"
        :key="i"
        class="w-[500px] h-[600px] bg-center bg-cover rounded-lg overflow-hidden"
      >
        <figure>
          <img
            :src="img"
            :alt="`Slide ${i + 1}`"
            class="object-cover w-full h-full"
            @error="(e) => (e.target.src = fallback)"
          />
          <figcaption class="sr-only">Slide {{ i + 1 }}</figcaption>
        </figure>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  containerClass: {
    type: String,
    default: "max-w-2xl",
  },
  fallback: {
    type: String,
    default: "https://via.placeholder.com/300x300?text=No+Image",
  },
});

const emit = defineEmits(["change"]);

const coverflowOptions = {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
};

function onSlideChange(swiper) {
  emit("change", swiper.realIndex);
}
</script>
