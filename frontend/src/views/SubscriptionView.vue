<script setup>
import Subscription from "@/components/Subscription.vue";
import MemberIcon from "../../public/MemberIcon.vue";
</script>

<template>
  <div class="px-4 pt-4 pb-16 bg-white">
    <div class="p-12 mx-auto border-4 shadow-lg max-w-7xl border-gray rounded-xl">
      <div class="flex flex-wrap justify-center gap-8">
        <Subscription
          title="普通會員"
          price="$0"
          :features="[
            '瀏覽紀錄限制20個',
            '限制推薦100個 / 天',
            '參加活動',
            '超級喜歡1次(直接對話框)',
          ]"
        />
        <Subscription
          title="高級會員"
          price="$299"
          :features="[
            '普通會員權限',
            '瀏覽紀錄限制20個',
            '限制推薦300個 / 天',
            '主辦活動限制5個',
            '送禮功能',
            '超級喜歡5次',
          ]"
        />
      </div>
      <div class="flex justify-center mt-12">
        <button
          class="px-16 py-4 rounded-2xl hover:text-white bg-primary-200 hover:bg-primary-100"
        >
          返回
        </button>
      </div>
    </div>
  </div>
</template>
