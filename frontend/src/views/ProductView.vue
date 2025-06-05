<!-- <script setup>
import ProductList from "@/components/ProductList.vue";
</script>

<template>
  <ProductList />
</template> -->

<!-- 0602 melody -->
<script setup>
import { ref, onMounted } from "vue";
import axios from "../api/axios.js";
import { useCartStore } from "../stores/cart.js";
import CartIcon from "@/assets/cart.svg";

const cartStore = useCartStore();

const { addCart } = cartStore; //解構拿來使用

const products = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get("/products");
    products.value = res.data;
  } catch (err) {
    console.error("讀取商品失敗", err);
  }
});
</script>

<template>
  <div class="">
    <h1 class="mb-4 text-xl font-bold text-center text-[#023047]">商品列表</h1>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="p-4 mb-2 transition-transform shadow-xl hover:scale-105 hover:shadow-2xl rounded-[10px]"
      >
        <div class="flex flex-col justify-between h-full">
          <!-- 上半部: 圖片 + 描述 -->
          <div class="mb-2">
            <img
              :src="product.image_url"
              alt="Product Image"
              class="object-cover w-full b-2 rounded-[10px]"
            />
          </div>
          <div class="flex flex-col h-full gap-2">
            <p class="font-semibold text-center text-[#023047]">
              {{ product.name }}
            </p>
            <p class="text-center text-[#023047] font-semibold">
              價格：{{ product.price }}
            </p>
            <p class="mx-12 text-center text-gray-500">
              {{ product.description }}
            </p>
          </div>
          <!-- 下半部 : 庫存 -->
          <!-- 這樣寫是因為商品描述長度不同 會導致庫存在不同水平線上 -->
          <div class="flex justify-center mb-4">
            <p class="py-1 mr-4 text-[#023047] font-semibold">
              庫存：{{ product.inventory }}
            </p>
            <div v-if="product.inventory <= 5">
              <p class="py-1 px-4 bg-[#ffb703] text-white rounded-[20px]">
                庫存不足
              </p>
            </div>
          </div>
          <button
            @click="addCart(product)"
            class="flex items-center gap-2 mx-auto css-button-fully-rounded--blue"
          >
            <CartIcon
              class="inline-block w-5 h-5 align-middle cart-icon cart-icon-color"
            />
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.css-button-fully-rounded--blue {
  min-width: 130px;
  width: 150px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 20px;
  border: 2px solid #219ebc;
  background: #219ebc;
}
.css-button-fully-rounded--blue:hover {
  background: #fff;
  color: #219ebc;
}

.cart-icon-color {
  color: #ffffff;
}

.css-button-fully-rounded--blue:hover .cart-icon-color {
  color: #219ebc;
}

.cart-icon {
  position: relative;
  top: -2px;
}
</style>
