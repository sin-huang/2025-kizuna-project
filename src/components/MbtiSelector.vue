<template>
  <div class="grid grid-cols-4 gap-4 px-4 py-2">
    <button
      v-for="type in mbtiList"
      :key="type"
      @click="emit('update:modelValue', type)"
      class="rounded-lg border-2 px-2 py-1 text-sm font-semibold transition"
      :class="modelValue === type
        ? 'bg-green-100 border-green-500 text-green-600'
        : 'border-gray-300 text-gray-500'"
    >
      {{ type }}
    </button>
  </div>
</template>

<script setup>
// 綁定 v-model
const props = defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])

// 16 型人格清單
const mbtiList = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
]
</script>
