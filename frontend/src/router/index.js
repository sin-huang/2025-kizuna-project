import { createRouter, createWebHistory } from "vue-router";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import EditProfileView from "../views/EditProfileView.vue";
// import TestView from "../views/TestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "googleProfile",
      component: ProfileView,
    },
    {
      path: "/product",
      name: "Product",
      component: ProductView,
    },
    {
      path: "/cart",
      name: "Cart",
      component: CartView,
    },
    // 加入登入頁面route
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    // 加入註冊頁面route
    {
      path: "/register",
      name: "Register",
      component: RegisterView,
    },
    // 加入編輯個人檔案頁面route
    {
      path: "/edit-profile",
      name: "EditProfile",
      component: EditProfileView,
    },
  ],
});

export default router;
