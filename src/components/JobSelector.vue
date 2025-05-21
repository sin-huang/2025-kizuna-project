<template>
  <div class="grid grid-cols-2 gap-4 px-4 py-2">
    <button
      v-for="job in jobList"
      :key="job"
      @click="emit('update:modelValue', job)"
      class="rounded-lg border-2 px-3 py-2 text-sm font-semibold transition"
      :class="modelValue === job
        ? 'bg-green-100 border-green-500 text-green-600'
        : 'border-gray-300 text-gray-500'"
    >
      {{ job }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])

const jobList = [
  '科技與工程',
  '教育與學術',
  '藝術與設計',
  '醫療與照護',
  '餐飲與零售',
  '商業與行政'
]
</script>
