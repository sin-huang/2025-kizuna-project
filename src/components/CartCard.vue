<script setup>
import { useCartStore } from "@/stores/cart.js";
import { useProductStore } from "@/stores/products.js";
const cartStore = useCartStore();
const productStore = useProductStore();
// 傳資料
// const { cartItems, totalPrice, totalItems } = storeToRefs(cartStore); 這邊不會用到這些資訊，函式不能寫入storeToRefs?

const handleQuantityChange = (itemId, newQuantity) => {
  if (newQuantity < 1) {
    newQuantity = 1; // 確保最小值為 1
  }
  cartStore.updateQuantity(itemId, newQuantity);
};

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="grid grid-cols-5 items-center">
    <div class="col-span-2">
      <img src="" alt="" />
      <p>商品: {{ item.name }}</p>
    </div>
    <p>價格: {{ item.price }}</p>
    <input
      type="number"
      :value="item.quantity"
      @change="handleQuantityChange(item.id, $event.target.valueAsNumber)"
    />
    <button
      @click="cartStore.removeFromCart(item.id)"
      class="bg-blue-600 text-white w-fit px-4 py-1 rounded hover:bg-blue-700 justify-self-end"
    >
      移除
    </button>
    <br />
  </div>
</template>

<style scoped></style>
