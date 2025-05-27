import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useProductStore } from "@/stores/products.js";
import axios from "axios";

export const useCartStore = defineStore("cart", () => {
  const productStore = useProductStore();
  const cartItems = ref([]);
  // { id: 1, name: '機械鍵盤', price: 2999, quantity: 1 }

  // 計算商品總價 記得寫0和computed
  const totalPrice = computed(() => {
    return cartItems.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  });

  // 計算商品總數
  const totalQuantity = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
  });

  // 加入商品到購物車
  const addCart = async (product) => {
    cartItems.value.push(product);
    console.log(cartItems.value);
    // try {
    //   //1.更新前端畫面
    //   const existingItem = cartItems.value.find(
    //     (item) => item.id === product.id
    //   );

    //   if (existingItem) {
    //     existingItem.quantity++;
    //   } else {
    //     cartItems.value.push({
    //       id: product.id,
    //       name: product.name,
    //       price: product.price,
    //       quantity: 1,
    //     });
    //   }

    //   //更新商品庫存 用id去找對應的東西
    //   productStore.decreaseInventory(product.id);

    //   //2.發送api到後端
    // console.log(cartItems.value[0].id);
      const resp = await axios.post("http://localhost:3000/api/cart", {
        user_id:1,
        username:localStorage.getItem('username'),
        productId: cartItems.value[0],
        quantity: 1,
        createAt:Date.now()
        //如果需要，也可帶上 userId 或使用 token 驗證
      });
    //   console.log("成功加入購物車：", resp.data);
    // } catch(error) {
    //   console.error("加入購物車失敗：", error);
    // }
  };

  //從購物車移除商品(用findIndex，因為不知道要刪第幾個)
  const removeFromCart = async (itemId) => {
    const index = cartItems.value.findIndex((item) => item.id === itemId);
    // 有找到
    if (index > -1) {
      //恢復商品庫存
      //第一步:先找到此物件
      const item = cartItems.value[index];

      //第二步:因為要全部數量移除，但每一次只減1，所以要跑4次，假設購物車商品數量為4
      for (let i = 0; i < item.quantity; i++) {
        productStore.increaseInventory(itemId);
      }
    }

    try {
      const resp = await axios.delete(
        `http://localhost:3000/api/cart/${itemId}`
      );
      console.log(resp.data);
    } catch (error) {
      console.log("刪除購物車項目失敗", error);
    }
    cartItems.value.splice(index, 1);
    //前端同步刪除，從index這邊刪掉1筆資料
  };

  //更新購物車商品數量
  //id是唯一的，用id去找對應的物件
  //newQuantity是指購物車數量變化顯示出來的值，但實際值尚未更新
  const updateQuantity = async (itemId, newQuantity) => {
    const item = cartItems.value.find((item) => item.id === itemId);

    if (item) {
      // 一定要先寫差值
      const diff = newQuantity - item.quantity;

      //itemQuantity是指購物車數量變化顯示出來的值，但實際值尚未更新
      item.quantity = newQuantity;

      //根據數量變化更新庫存
      //買的變多，庫存變少
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          productStore.decreaseInventory(itemId);
        }
      } else {
        // 注意此情況diff是負數
        for (let i = 0; i < Math.abs(diff); i++) {
          productStore.increaseInventory(itemId);
        }
      }

      //呼叫後端API更新數量
      try {
        const resp = await axios.patch(
          `http://localhost:3000/api/cart/${itemId}`,
          {
            quantity: newQuantity,
          }
        );
        console.log(resp.data);
      } catch (err) {
        console.log("更新購物車數量失敗", err);
      }
    }
  };

  //清空購物車
  const clearCart = async () => {
    //清空資料
    cartItems.value = [];
    try {
      const resp = await axios.delete("http://localhost:3000/api/cart");
      //恢復所有商品的庫存，先把單個商品抓出來
      cartItems.value.forEach((item) => {
        //單個商品數量有幾個就跑幾次迴圈，把庫存加回來
        for (let i = 0; i < item.quantity; i++) {
          productStore.increaseInventory(item.id);
        }
      });
      console.log(resp.data);
    } catch (error) {
      console.log("清空購物車失敗");
    }
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
