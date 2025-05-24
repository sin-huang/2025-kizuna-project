<template>
  <div class="max-w-2xl p-6 mx-auto">
    <GiftItem v-model:subtotal="subtotal" />
    <FriendList />
    <div class="flex justify-between mt-6 text-xl font-bold">
      <span>訂單合計金額：</span>
      <span>$ {{ subtotal }}</span>
    </div>
    <p class="mt-2 text-sm text-gray-500">
      若有此商品適用的優惠券，請先點選「確認購買禮品清單」，在結帳頁點擊「選擇優惠券」進行使用。
    </p>
    <button
      class="w-full py-2 mt-4 text-white bg-[#7395BA] rounded-md"
      @click="confirmPurchase"
    >
      確認購買清單
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import GiftItem from "@/components/GiftItem.vue";
import FriendList from "@/components/FriendList.vue";

const subtotal = ref(0);

const updateSubtotal = (newSubtotal) => {
  subtotal.value = newSubtotal;
};

watch(
  () => GiftItem.subtotal,
  (newVal) => {
    updateSubtotal(newVal);
  }
);
watch(
  () => FriendList.selected,
  (newVal) => {
    // 當選擇的好友改變時，可以在這裡添加邏輯
    console.log("選擇的好友:", newVal);
  }
);
const confirmPurchase = () => {
  // 在這裡處理購買邏輯
  alert("購買清單已確認，請前往結帳頁面完成付款。");
};
// 這裡可以添加更多邏輯，例如發送購買請求到後端
// 或者更新購物車狀態等
</script>
