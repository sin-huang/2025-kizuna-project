<script setup>
import { ref, onMounted } from "vue";
import axios from "@/api/axios.js";
import MatchResult from "@/components/MatchResult.vue";

const matches = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get("/api/match");
    matches.value = res.data;
  } catch (err) {
    console.error("取得配對資料失敗", err);
  }
});
</script>

<template>
  <div>
    <h1>推薦結果</h1>
    <div v-if="matches.length > 0">
      <MatchResult v-for="user in matches" :key="user.id" :user="user" />
    </div>
    <div v-else>
      <p>目前沒有符合的配對對象。</p>
    </div>
  </div>
</template>
