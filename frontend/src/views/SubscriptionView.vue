<script setup>
import Subscription from "@/components/Subscription.vue";
</script>


<template>
  <div class="min-h-screen px-4 py-12 bg-gray-100">
    <div class="flex flex-wrap justify-center max-w-5xl gap-8 mx-auto">
      <Subscription
        title="普通會員"
        icon="👤"
        price="$0"
        :features="[
          '瀏覽紀錄限制20個',
          '限制推薦100個 / 天',
          '參加活動',
          '超級喜歡1次(直接對話框)'
        ]"
      />
      <Subscription
        title="高級會員"
        icon="🔥"
        price="$299"
        :features="[
          '普通會員權限',
          '瀏覽紀錄限制20個',
          '限制推薦300個 / 天',
          '主辦活動限制5個',
          '送禮功能',
          '超級喜歡5次'
        ]"
      />
    </div>
    <div class="flex justify-center mt-12">
      <button class="px-8 py-2 text-white bg-blue-300 rounded hover:bg-blue-400">
        返回
      </button>
    </div>
  </div>
</template>