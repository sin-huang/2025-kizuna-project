const db = require("../config/db.js");
const { userCartSummary } = require("../models/schema.js");
const { eq } = require("drizzle-orm"); 

let cart = [];

const submitCart = async (req, res) => {
  console.log(req.body)
  const { user_id, username, productId, quantity, createAt } = req.body;
  console.log(user_id, username, productId, quantity, createAt);

  //到資料庫找東西，如果購物車有此商品，就更新此商品;購物車沒有此商品，就新增商品
  try {
    const existing = await db
      .select()
      .from(userCartSummary)
      .where(eq(userCartSummary.user_id, user_id));

    if (existing.length > 0) {
      await db
        .update(userCartSummary)
        .set({ products: products })
        .where(eq(userCartSummary.user_id, user_id));
    } else {
      await db.insert(userCartSummary).values({
        user_id:user_id,
        username:username,
        products:productId,
      });

      res.status(200).json({ message: "購物車寫入成功" });
    }
  } catch (err) {
    console.log("寫入失敗", err);
    res.status(500).json({ message: "購物車寫入失敗" });
  }
};

const updateCartItem = (req, res) => {
  const itemId = parseInt(req.params.id);
  const { quantity } = req.body;

  const index = cart.findIndex((item) => item.id === itemId);
  if (index > -1) {
    cart[index].quantity = quantity;
    console.log(`更新 id=${itemId} 的商品數量:${quantity}`, cart);
    res.status(200).json({ message: "數量更新成功" });
  } else {
    res.status(404).json({ message: "找不到商品" });
  }
};

const deleteCartItem = (req, res) => {
  const itemId = parseInt(req.params.id); // 把字串轉數字（視資料而定）

  const index = cart.findIndex((item) => item.id === itemId);
  if (index > -1) {
    cart.splice(index, 1);
    console.log(`已刪除 id=${itemId}，目前購物車內容：`, cart);
    res.status(200).json({ message: "刪除成功" });
  } else {
    res.status(404).json({ message: "找不到商品" });
  }
};

const clearCart = (req, res) => {
  cart = [];
  console.log("購物車已清空");
  res.json({ message: "購物車已清空" });
};

// 匯出
module.exports = {
  submitCart,
  updateCartItem,
  deleteCartItem,
  clearCart,
};
