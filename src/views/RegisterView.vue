<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const store = useUserStore();
const router = useRouter();

const username = ref("");
const password = ref("");

//
const handleRegister = async () => {
  // debug
  // console.log('開始註冊', username.value);
  if (!username.value || !password.value) {
    alert("請輸入帳號或密碼");
    return;
  }

  const res = await store.register(username.value, password.value);
  // debug
  console.log(res);
  if (res.success) {
    alert(res.message || "註冊成功，請登入");
    router.push("/login"); // 註冊完成後 導回登入頁
  } else {
    alert(`${res.message}${res.reason ? `\n原因:${res.reason}` : ""}`);
  }
};
</script>

<template>
  <div>
    <h2>註冊</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="username" placeholder="輸入帳號" required />
      <input
        v-model="password"
        type="password"
        placeholder="輸入密碼"
        required
      />
      <button
        type="submit"
        class="p-3 font-bold text-white bg-blue-500 rounded-full"
      >
        註冊( 新增帳號 )
      </button>
    </form>
  </div>
</template>
