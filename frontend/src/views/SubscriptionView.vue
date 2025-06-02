<script setup>
import Subscription from '@/components/Subscription.vue'
</script>

<template>
  <div class="min-h-screen bg-white p-8 flex flex-col items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
      <!-- 普通會員 -->
      <Subscription
        title="普通會員"
        price="0"
        :features="[
          '瀏覽紀錄限制20個',
          '限制推薦100個 / 天',
          '參加活動',
          '超級喜歡1次(直接對話框)'
        ]"
        :isPremium="false"
      >
        <template #icon>
          <span class="text-5xl">👤</span>
        </template>
      </Subscription>

      <!-- 高級會員 -->
      <Subscription
        title="高級會員"
        price="99"
        :features="[
          '普通會員權限',
          '瀏覽紀錄限制20個',
          '限制推薦300個 / 天',
          '主辦活動限制5個',
          '送禮功能',
          '超級喜歡5次'
        ]"
        :isPremium="true"
      >
        <template #icon>
          <span class="text-5xl">🔥</span>
        </template>
      </Subscription>
    </div>

    <button
      class="mt-10 bg-blue-300 text-white font-bold px-6 py-2 rounded hover:bg-blue-400"
    >
      返回
    </button>
  </div>
</template>
