<template>
  <h1 class="mb-6 text-2xl font-bold">購買禮物</h1>
  <p class="mb-4 text-gray-500">禮物資訊</p>

  <div class="flex items-center p-4 border rounded-md">
    <img
      class="object-cover w-20 h-20 rounded-md"
      src="https://placehold.co/80"
      alt="沙拉圖"
    />
    <div class="flex-1 ml-4">
      <p>饗泰多 輕食沙拉</p>
      <p class="text-gray-500">$ {{ price }}</p>
    </div>

    <!-- 數量控制器 -->
    <div class="flex items-center">
      <button
        @click="decreaseQty"
        class="px-2 bg-[#DADADA] hover:bg-[#c0c0c0] rounded"
      >
        -
      </button>
      <span class="px-2">
        {{ quantity }}
      </span>
      <button
        @click="increaseQty"
        class="px-2 bg-[#DADADA] hover:bg-[#c0c0c0] rounded"
      >
        +
      </button>
    </div>
    <div class="ml-4">$ {{ subtotal }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { watch } from "vue";

const emit = defineEmits(["update:subtotal"]);

const price = 300;
const quantity = ref(1);

const increaseQty = () => {
  quantity.value++;
  emit("update:subtotal", subtotal.value);
};

const decreaseQty = () => {
  if (quantity.value > 1) {
    quantity.value--;
    emit("update:subtotal", subtotal.value);
  }
};

const subtotal = computed(() => price * quantity.value);

// 當 subtotal 改變時通知父層
watch(
  subtotal,
  (newVal) => {
    emit("update:subtotal", newVal);
  },
  { immediate: true }
); // immediate 讓它初始化就會 emit
</script>
