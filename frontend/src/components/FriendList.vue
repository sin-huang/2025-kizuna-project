<template>
  <div>
    <div class="flex items-center justify-between mt-6 mb-2">
      <h1 class="text-2xl font-bold">選擇送禮對象</h1>
      <input
        v-model="searchText"
        type="text"
        placeholder="搜尋好友"
        class="w-full max-w-xs px-2 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0D7EC] focus:border-[#C0D7EC]"
      />
    </div>
    <p class="mb-4 text-gray-500">近期聯繫好友</p>
    <div
      v-for="(friend, i) in filteredFriends"
      :key="i"
      class="flex items-center p-3 mb-2 border rounded-md cursor-pointer transition duration-200 hover:bg-[#C0D7EC] hover:shadow-md"
      :class="{ 'bg-[#C0D7EC]': selected.includes(i) }"
      @click="toggleSelect(i)"
    >
      <img :src="friend.img" class="w-10 h-10 rounded-full" />
      <span class="ml-4">{{ friend.name }}</span>
      <span
        v-if="selected.includes(i)"
        class="ml-auto font-bold text-white bg-[#7395BA] rounded-full p-1 w-8 h-8 flex items-center justify-center"
      >
        ✓
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const selected = ref([]); // 改為陣列以支援複選
const searchText = ref("");

const toggleSelect = (index) => {
  const idx = selected.value.indexOf(index);
  if (idx === -1) {
    // 尚未選中 → 加進去
    selected.value.push(index);
  } else {
    // 已選中 → 移除
    selected.value.splice(idx, 1);
  }
};

const friends = ref([
  { name: "林小美", img: "https://placehold.co/50" },
  { name: "陳阿明", img: "https://placehold.co/50" },
  { name: "張大偉", img: "https://placehold.co/50" },
  { name: "李小強", img: "https://placehold.co/50" },
]);

const filteredFriends = computed(() =>
  friends.value.filter((friend) => friend.name.includes(searchText.value))
);
</script>
