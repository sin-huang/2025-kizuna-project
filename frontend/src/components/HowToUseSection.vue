<template>
  <section class="flex items-center min-h-screen px-6 py-20 bg-white">
    <div
      class="flex flex-col-reverse items-center gap-12 mx-auto max-w-7xl md:flex-row"
    >
      <!-- 向量圖 / 插圖 -->
      <div class="w-full md:w-1/2">
        <img
          src="https://undraw.co/api/illustrations/6304b3db-6aa1-4d57-b7c4-45d66300cf89"
          alt="Kizuna Guide Illustration"
          class="w-full max-w-md mx-auto shadow-xl rounded-2xl"
        />
      </div>

      <!-- 文字說明 -->
      <div class="w-full text-center md:w-1/2 md:text-left">
        <!-- 主標 + 副標 -->
        <h2
          class="mb-4 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl"
        >
          Get started with Kizuna
          <span class="block text-secondary">展開你的人際探索之旅</span>
        </h2>

        <!-- 簡短說明 + 英文點綴 -->
        <p class="mb-10 text-lg text-gray-700 md:text-xl">
          第一次來？沒問題！三個步驟輕鬆展開探索旅程。
          <br />
          <span class="italic text-secondary"
            >New here? Let’s get you started in 3 simple steps!</span
          >
        </p>

        <!-- 三步驟清單 -->
        <ul class="space-y-10 text-lg text-left">
          <li class="flex items-start">
            <span class="mr-4 text-2xl text-secondary" aria-label="建立個人檔案"
              >👤</span
            >
            <div>
              <p class="text-xl font-semibold text-gray-800">1. 展現真實自我</p>
              <p class="mt-1 text-base text-gray-600">
                建立你的個人檔案，分享興趣與故事，讓他人認識真實的你。
              </p>
              <p class="mt-1 text-sm italic text-gray-400">
                Create a profile that reflects who you truly are.
              </p>
            </div>
          </li>

          <li class="flex items-start">
            <span class="mr-4 text-2xl text-secondary">🎯</span>
            <div>
              <p class="text-xl font-semibold text-gray-800">
                2. 找到你的興趣圈
              </p>
              <p class="mt-1 text-base text-gray-600">
                探索活動、加入聚會，或自己發起一場精彩的聚會。
              </p>
              <p class="mt-1 text-sm italic text-gray-400">
                Discover events that match your vibe — or host your own.
              </p>
            </div>
          </li>

          <li class="flex items-start">
            <span class="mr-4 text-2xl text-secondary">💬</span>
            <div>
              <p class="text-xl font-semibold text-gray-800">3. 開啟真實互動</p>
              <p class="mt-1 text-base text-gray-600">
                不只傳訊息，更讓對話延伸成真實連結。
              </p>
              <p class="mt-1 text-sm italic text-gray-400">
                Start real conversations that go beyond the screen.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
