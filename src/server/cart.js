const express = require("express"); //你先拿工具（Express）
const pool = require("../config/db"); //準備存貨的倉庫（資料庫連線）
const router = express.Router(); //安排一個店員（路由器）來指引，回傳一個路由器物件

router.get("/:userId", async (req, res) => {
  try {
    let userId = req.params.userId.replace(/[^\d]/g, ""); // 清掉非數字的隱藏字元
    userId = parseInt(userId);
    // req裡的動態參數，後端端點是固定的，所以還要再加動態參數
    // console.log(userId)
    // console.log(req)
    // $1 這個占位符是用來在 SQL 查詢中安全地插入變數值，避免直接把變數拼接到 SQL 語句中，記得用陣列包

    //查詢使用者的購物車
    const cartResult = await pool.query("SELECT * FROM CART WHERE user_id=$1", [
      userId,
    ]);
    // console.log(cartResult.rows);
    if (cartResult.rows.length === 0) {
      return res.status(404).json({ message: "購物車不存在" });
    }
    const cartId = cartResult.rows[0].id; //只會有一筆

    //查詢購物車的項目
    const itemResult = await pool.query(
      "SELECT ci.id AS cart_item_id,ci.quantity,p.id AS product_id,p.name,p.price FROM cart_items ci JOIN products p ON ci.product_id=p.id WHERE ci.cart_id=$1",
      [cartId]
    );

    res.json({ cart: cartResult.rows[0], items: itemResult.rows });
    //同一購物車可能有新增不同筆商品
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "伺服器錯誤" });
  }
});

//新增商品到購物車
router.post("/:userId", async (req, res) => {
  let userId = req.params.userId.replace(/[^\d]/g, "");
  userId = parseInt(userId);
  const { productId, quantity } = req.body;

  try {
    //檢查是否庫存足夠
    const productResult = await pool.query(
      "SELECT stock FROM products WHERE id=$1",
      [productId]
    );

    if (productResult.rows.length === 0) {
      return res.status(404).json({ message: "商品不存在" });
    }

    if (productResult.rows[0].stock < quantity) {
      return res.status(400).json({ message: "庫存不足" });
    }

    //檢查是否有購物車，無則創建
    let cartResult = await pool.query("SELECT * FROM cart WHERE user_id=$1", [
      userId,
    ]);
    if (cartResult.rows.length === 0) {
      cartResult = await pool.query(
        "INSERT INTO CART (user_id) VALUES ($1) RETURNING *",
        [userId]
      );
    }
    const cartId = cartResult.rows[0].id;

    //檢查購物車是否已有該商品
    const itemResult = await pool.query(
      "SELECT * FROM cart_items WHERE cart_id=$1 AND product_id=$2",
      [cartId, productId]
    );

    if (itemResult.rows.length > 0) {
      //更新數量
      await pool.query(
        "UPDATE cart_items SET quantity=quantity + $1 WHERE cart_id =$2 AND product_id=$3",
        [quantity, cartId, productId]
      );
    } else {
      //新增商品到購物車
      await pool.query(
        "INSERT INTO cart_items (cart_id,product_id,quantity) VALUES ($1,$2,$3)",
        [cartId, productId, quantity]
      );
    }

    res.status(201).json({ message: "商品已加入購物車" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "伺服器錯誤" });
  }
});

module.exports = router;
