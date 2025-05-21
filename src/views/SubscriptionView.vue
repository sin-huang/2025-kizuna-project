<template>
  <div class="container py-10 mx-auto">
    <h2 class="mb-6 text-2xl font-bold">選擇訂閱方案</h2>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <!-- 高級會員 -->
      <div class="p-6 border shadow rounded-xl">
        <h3 class="mb-2 text-xl font-semibold">高級會員</h3>
        <p class="mb-4">NT$99 / 月</p>
        <button
          class="px-4 py-2 text-white bg-blue-600 rounded"
          @click="checkout('basic')"
        >
          立即訂閱
        </button>
      </div>

      <!-- 尊貴會員 -->
      <div class="p-6 border shadow rounded-xl">
        <h3 class="mb-2 text-xl font-semibold">尊貴會員</h3>
        <p class="mb-4">NT$299 / 月</p>
        <button
          class="px-4 py-2 text-white bg-purple-600 rounded"
          @click="checkout('premium')"
        >
          立即訂閱
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "@/api/axios";

// ⛳ 點按鈕時發送訂閱付款請求
async function checkout(plan) {
  try {
    const res = await axios.post("/api/ecpay/pay", { plan });
    // console.log("📦 金流回傳內容：", res.data);
    // ✅ 更穩的做法 → 建立新視窗、開啟、寫入、完成
    const newWin = window.open("", "_blank"); // 一定要給 URL 空字串
    newWin.document.open();
    newWin.document.write(res.data);
    newWin.document.close(); // ✅ 告訴瀏覽器寫入完成，避免空白頁
  } catch (err) {
    console.error("❌ 金流建立失敗", err);
    alert("建立付款頁失敗！");
  }
}
</script>
