<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "" },
  class: { type: String, default: "" },
});

const isVisible = ref(false);
const imgRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      observer.disconnect();
    }
  });

  if (imgRef.value) {
    observer.observe(imgRef.value);
  }
});
</script>

<template>
  <div ref="imgRef" class="w-full h-full">
    <img
      v-if="isVisible"
      :src="src"
      :alt="alt"
      :class="class"
      class="object-cover w-full h-full"
    />
  </div>
</template>
