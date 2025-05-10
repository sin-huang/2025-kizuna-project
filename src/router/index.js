import { createRouter, createWebHistory } from "vue-router";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Product",
      component: ProductView,
    },
    {
      path: "/cart",
      name: "Cart",
      component: CartView,
    },
  ],
});

export default router;
