<script setup>
const props = defineProps({
  user: Object,
});
</script>

<template>
  <div class="p-3 mb-2 border rounded match-card">
    <h3>{{ user.name }} (分數: {{ user.score }})</h3>
    <p>共同興趣: {{ user.commonInterests.join(", ") }}</p>
  </div>
</template>

<style scoped>
.match-card {
  background: #f9f9f9;
}
</style>
