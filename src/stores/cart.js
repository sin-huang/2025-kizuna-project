import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useProductStore } from "@/stores/products.js";

export const useCartStore = defineStore("cart", () => {

  const productStore = useProductStore();

  const cartItems = ref([]);

  const totalPrice = computed(() => {
    return cartItems.value.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
  });

  const totalQuantity = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
  });

  const addCart = (product) => {
    const existingItem = cartItems.value.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }

    productStore.decreaseInventory(product.id, 1);
  };

  const removeFromCart = (itemId) => {
    const index = cartItems.value.findIndex((item) => item.id === itemId);

    if (index > -1) {
      const item = cartItems.value[index];
      //【進階】不用for迴圈一個一個加回庫存 而是直接抓原本購物車的item.quantity 一次加回去 ( for迴圈很浪費時間 ex: 購物車從100→1 就要跑99次迴圈...)
      productStore.increaseInventory(item.id, item.quantity);
    }

    cartItems.value.splice(index, 1);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const item = cartItems.value.find((item) => item.id === itemId);

    if (item) {
      const diff = newQuantity - item.quantity;
      item.quantity = newQuantity;

      // 根據數量變化更新庫存
      // 買的變多，庫存變少
      if (diff > 0) {
        productStore.decreaseInventory(itemId, diff);
      } else {
        // 注意此情況diff是負數
        productStore.increaseInventory(itemId, -diff);
      }
    }
  };

  const clearCart = () => {
    cartItems.value.forEach((item) => {
      productStore.increaseInventory(item.id, item.quantity);
    });
    
    cartItems.value = [];
  };
  return {
    cartItems,
    totalPrice,
    totalQuantity,
    addCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
});
