const db = require("../config/db");
const { userCartSummary } = require("../models/schema");
const { eq } = require("drizzle-orm"); // eq 是 drizzle-orm 提供的 條件運算工具，用來寫 SQL 查詢中的 等於條件（where =）

//db.select: Drizzle ORM 的查詢方法：要「查詢資料」
//userCartSummary.username這個欄位=(eq)我傳進去的username變數
//因為 .select() 查詢時，Drizzle（還有大部分 ORM 和原生 SQL）都會預設你可能會拿到「多筆資料」，所以它永遠回傳一個陣列，即使只查到一筆，或甚至是零筆。
// async function addProductToCart(username, product) {
//   const existingUser = await db
//     .select()
//     .from(userCartSummary)
//     .where(eq(userCartSummary.username, username));
// }

// if (existingUser.length > 0) {
//   // 如果 products 是 undefined 或 null（例如使用者目前還沒任何產品），就會使用空陣列 [] 作為預設值。
//   const existingProducts = existingUser[0].products || [];
//   // const updatedProducts=[...]
// }

let cart = [];

const submitCart = (req, res) => {
  const cartData = req.body;

  console.log("✅ 收到購物車資料：", cartData);
  cart.push({
    id: cartData.productId,
    quantity: cartData.quantity
  });

  // 這邊你可以未來接 Drizzle ORM 寫入資料庫

  res.json({ message: "購物車資料接收成功" });
};

const updateCartItem=(req, res) => {
  const itemId = parseInt(req.params.id);
  const { quantity }=req.body;

  const index=cart.findIndex(item => item.id === itemId);
  if(index > -1){
    cart[index].quantity=quantity;
    console.log(`更新 id=${itemId} 的商品數量:${quantity}`,cart)
    res.status(200).json({ message: '數量更新成功'})
  } else {
    res.status(404).json({ message: '找不到商品'})
  }
}

const deleteCartItem = (req, res) => {
  const itemId = parseInt(req.params.id); // 把字串轉數字（視資料而定）

  const index = cart.findIndex(item => item.id === itemId);
  if (index > -1) {
    cart.splice(index, 1);
    console.log(`已刪除 id=${itemId}，目前購物車內容：`, cart);
    res.status(200).json({ message: '刪除成功' });
  } else {
    res.status(404).json({ message: '找不到商品' });
  }
};

const clearCart = (req, res) => {
  cart = [];
  console.log('購物車已清空');
  res.json({ message: "購物車已清空"})
}


// 匯出
module.exports = {
  submitCart,
  updateCartItem,
  deleteCartItem,
  clearCart
};

// async function addProductToCart(username, product) {
//   // 查找使用者資料
//   const existingUser = await db
//     .select()
//     .from(userCartSummary)
//     .where(eq(userCartSummary.username, username));

//   if (existingUser.length > 0) {
//     // 使用者存在，更新購物車產品陣列
//     const existingProducts = existingUser[0].products || [];
//     const updatedProducts = [...existingProducts, product];

//     await db
//       .update(userCartSummary)
//       .set({ products: updatedProducts })
//       .where(eq(userCartSummary.user_id, existingUser[0].user_id));

//     console.log('✅ 已更新使用者的購物車');
//   } else {
//     // 使用者不存在，新增一筆
//     await db.insert(userCartSummary).values({
//       username: username,
//       products: [product],
//     });

//     console.log('🆕 新增了新的使用者購物車');
//   }
// }

// module.exports = {
//   addProductToCart,
// };
