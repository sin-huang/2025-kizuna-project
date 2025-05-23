import { createRouter, createWebHistory } from "vue-router";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ChatRoomView from "@/views/ChatRoomView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";

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
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    }, 
    {
      path: "/register",
      name: "Register",
      component: RegisterView,
    },
    {
      path: "/chat",
      name: "ChatRoom",
      component: ChatRoomView,
    },
    // 加入商品詳細頁面route
    {
      path: "/productdetail",
      name: "ProductDetail",
      component: ProductDetailView,
    },
  ],
});

export default router;
