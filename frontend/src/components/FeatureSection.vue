<script setup></script>

<template>
  <section class="py-16 text-center bg-white">
    <h2 class="mb-6 text-2xl font-bold md:text-3xl">
      為什麼選擇我們？這裡，是最適合你的平台
    </h2>
    <p class="mb-12 text-gray-600">不想多想？立即免費體驗也沒問題！</p>

    <div class="grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-3">
      <!-- 有趣的活動 -->
      <div class="flex flex-col items-center">
        <svg
          class="w-12 h-12 mb-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 11c0 1.657-2.239 3-5 3s-5-1.343-5-3 2.239-3 5-3 5 1.343 5 3zm0 0c0-1.657 2.239-3 5-3s5 1.343 5 3-2.239 3-5 3-5-1.343-5-3z"
          />
        </svg>
        <h3 class="mb-2 text-lg font-semibold">有趣的活動</h3>
        <hr class="w-40 my-2 border-t-2 border-gray-200" />
        <p class="text-sm text-[#333333]">
          找不到想參加的活動？
          <br />
          沒關係，自己<span class="text-[#7395BA]">發起</span>也行！
          <br />
          與有相同興趣的人，一起展開精彩聚會。
        </p>
      </div>

      <!-- 即時的聊天功能 -->
      <div class="flex flex-col items-center">
        <svg
          class="w-12 h-12 mb-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6l4 2m4-6a8 8 0 11-16 0 8 8 0 0116 0z"
          />
        </svg>
        <h3 class="mb-2 text-lg font-semibold">即時的聊天功能</h3>
        <hr class="w-40 my-2 border-t-2 border-gray-200" />
        <p class="text-sm text-[#333333]">
          雙方有好感？我們立刻開啟<span class="text-[#7395BA]">專屬</span
          >聊天室，
          <br />
          提供一個輕鬆自在的小天地，
          <br />
          讓你們更進一步互動、認識。
        </p>
      </div>

      <!-- 最適合您的配對邀請 -->
      <div class="flex flex-col items-center">
        <svg
          class="w-12 h-12 mb-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 7h6v6H3V7zm12 0h6v6h-6V7zM3 17h6v6H3v-6zm12 0h6v6h-6v-6z"
          />
        </svg>
        <h3 class="mb-2 text-lg font-semibold">最適合您的配對邀請</h3>
        <hr class="w-40 my-2 border-t-2 border-gray-200" />
        <p class="text-sm text-[#333333]">
          根據你的興趣與參與行為，
          <br />
          精準推薦合適對象，<span class="text-[#7395BA]">主動</span>邀請你互動，
          <br />
          告別盲目滑動，建立真正的連結。
        </p>
      </div>
    </div>
  </section>
</template>
