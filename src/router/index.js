import { createRouter, createWebHistory } from "vue-router";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomeView from '@/views/HomeView.vue';
import BrandView from '@/views/BrandView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
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
      path: '/login',
      name: "Login",
      component: LoginView,
    },
    // 加入註冊頁面route
    {
      path: '/register',
      name: "Register",
      component: RegisterView,
    },
    //轉到品牌頁面
    {
      path: '/brand',
      name: "Rrand",
      component: BrandView,
    }
  ],
});

export default router;
