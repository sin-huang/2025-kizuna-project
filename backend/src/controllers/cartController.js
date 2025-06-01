const { db } = require("../db");
const { cartItems } = require("../db/schema");
const { eq, and } = require("drizzle-orm");

// ✅ 新增商品到購物車
const addToCart = async (req, res) => {
  const userId = req.user?.id;
  const { productId, quantity } = req.body;
  try {
    const existing = await db
      .select()
      .from(cartItems)
      .where(and(eq(cartItems.user_id, userId), eq(cartItems.product_id, productId)));

    if (existing.length > 0) {
      await db
        .update(cartItems)
        .set({ quantity: existing[0].quantity + quantity })
        .where(and(eq(cartItems.user_id, userId), eq(cartItems.product_id, productId)));

    } else {
      await db.insert(cartItems).values({
        user_id: userId,
        product_id: productId,
        quantity,
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error(" 加入購物車錯誤：", err);
    res.status(500).json({ error: "加入購物車失敗", detail: err.message });
  }
};
// ✅ 查詢購物車內容
const getCart = async (req, res) => {
  const userId = req.user?.id;

  try {
    const result = await db
      .select()
      .from(cartItems)
      .where(eq(cartItems.user_id, userId));

    res.json({ cartItems: result });
  } catch (err) {
    console.error(" 讀取購物車錯誤：", err);
    res.status(500).json({ error: "讀取購物車失敗", detail: err.message });
  }
};

// ✅ 更新數量
const updateQuantity = async (req, res) => {
  const userId = req.user?.id;
  const productId = Number(req.params.productId);
  const { quantity } = req.body;

  try {
    await db
      .update(cartItems)
      .set({ quantity })
      .where(and(eq(cartItems.user_id, userId), eq(cartItems.product_id, productId)));

    res.json({ success: true });
  } catch (err) {
    console.error(" 更新購物車錯誤：", err);
    res.status(500).json({ error: "更新數量失敗", detail: err.message });
  }
};

// ✅ 移除單一商品
const removeFromCart = async (req, res) => {
  const userId = req.user?.id;
  const productId = Number(req.params.productId);

  try {
    await db
      .delete(cartItems)
      .where(and(eq(cartItems.user_id, userId), eq(cartItems.product_id, productId)));

    res.json({ success: true });
  } catch (err) {
    console.error("刪除商品錯誤：", err);
    res.status(500).json({ error: "刪除失敗", detail: err.message });
  }
};

// ✅ 清空購物車
const clearCart = async (req, res) => {
  const userId = req.user?.id;

  try {
    await db.delete(cartItems).where(eq(cartItems.user_id, userId));
    res.json({ success: true });
  } catch (err) {
    console.error("清空購物車錯誤：", err);
    res.status(500).json({ error: "清空失敗", detail: err.message });
  }
};


module.exports = {
  addToCart,
  getCart,
  updateQuantity,
  removeFromCart,
  clearCart,
};
