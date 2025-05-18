<!-- 登入頁面 -->
<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const store = useUserStore();
const username = ref("");
const password = ref("");

const handleLogin = async () => {
  if( !username.value || !password.value){
    alert("請輸入帳號和密碼");
    return;
  }  
  try {
    await store.login(username.value, password.value);
    alert("登入成功");
  } catch (error) {
    console.error("登入失敗", error);
    const msg = error.response?.data?.message || "登入請求失敗";
    const reason = error.response?.data?.reason || error.message;
    alert(`登入失敗 失敗原因：${msg}:${reason}`);
  }
};
</script>

<template>
  <!-- 在template中 會自動解包 所以存取值不用.value-->
  <div class="">
    <input v-model="username" type="" placeholder="帳號" />
    <input v-model="password" type="password" placeholder="密碼" />
    <button @click="handleLogin" class="p-3 font-bold text-white bg-blue-500 rounded-full mx-2">登入</button>
    <router-link to="/register" class="p-3 font-bold text-white bg-blue-500 rounded-full">還沒有帳號? 點我註冊</router-link>
  </div>
</template>

<style></style>
