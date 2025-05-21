<template>
  <!-- 星座格子容器：3x4 的 Grid -->
  <div class="grid grid-cols-4 gap-4 px-4 py-2">
    <button
      v-for="(zodiac, index) in zodiacList"
      :key="index"
      @click="emit('update:modelValue', zodiac.name)"
      class="flex flex-col items-center justify-center rounded-full border-2 w-16 h-16 transition-all"
      :class="modelValue === zodiac.name
        ? 'bg-green-100 border-green-500 text-green-600'
        : 'border-gray-300 text-gray-500'"
    >
      <div class="text-2xl">{{ zodiac.icon }}</div>
      <div class="text-xs mt-1">{{ zodiac.name }}</div>
    </button>
  </div>
</template>

<script setup>
// 接收 v-model 的值（= 選中的星座）
const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

// 星座資料
const zodiacList = [
  { name: '牡羊座', icon: '♈' },
  { name: '金牛座', icon: '♉' },
  { name: '雙子座', icon: '♊' },
  { name: '巨蟹座', icon: '♋' },
  { name: '獅子座', icon: '♌' },
  { name: '處女座', icon: '♍' },
  { name: '天秤座', icon: '♎' },
  { name: '天蠍座', icon: '♏' },
  { name: '射手座', icon: '♐' },
  { name: '摩羯座', icon: '♑' },
  { name: '水瓶座', icon: '♒' },
  { name: '雙魚座', icon: '♓' },
]
</script>
