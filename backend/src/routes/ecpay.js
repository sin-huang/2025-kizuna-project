// backend/routes/ecpay.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");
const authMiddleware = require("../middleware/auth.js");
const ecpay = require("ecpay_aio_nodejs");
const dotenv = require("dotenv");
dotenv.config();

// ✅ 綠界參數設定
const options = {
  OperationMode: "Stage",
  MercProfile: {
    MerchantID: process.env.ECPAY_MERCHANT_ID,
    HashKey: process.env.ECPAY_HASH_KEY,
    HashIV: process.env.ECPAY_HASH_IV,
  },
  IgnorePayment: [],
  IsProjectContractor: false,
};
const create = new ecpay(options);

// ✅ 建立訂單並返回 HTML 表單
router.post("/create", authMiddleware, async (req, res) => {
  const { plan } = req.body;
  const price = plan === "premium" ? 299 : 99;
  const userId = req.user.id;
  const merchantTradeNo = "SUB" + Date.now();

  console.log("🧾 建立訂單:", { userId, plan, merchantTradeNo });

  try {
    // 存入訂閱資料（預設 status = pending）
    await pool.query(
      `INSERT INTO subscriptions (user_id, plan, price, status, MerchantTradeNo)
       VALUES ($1, $2, $3, 'pending', $4)`,
      [userId, plan, price, merchantTradeNo]
    );

    // 建立綠界付款參數
    const form = create.payment_client.aio_check_out_all({
      MerchantTradeNo: merchantTradeNo,
      MerchantTradeDate: new Date().toISOString().slice(0, 19).replace("T", " "),
      TotalAmount: price,
      TradeDesc: "Kizuna 交友訂閱",
      ItemName: `${plan}會員訂閱 x1`,
      ReturnURL: "http://localhost:3000/api/ecpay/notify",
      ClientBackURL: "http://localhost:5173/member",
      ChoosePayment: "Credit",
      EncryptType: 1,
    });

    // 回傳付款表單 HTML
    res.send(form);
  } catch (error) {
    console.error("❌ 建立訂單失敗", error);
    res.status(500).json({ message: "訂單建立失敗", reason: error.message });
  }
});


// ✅ 綠界通知付款成功（伺服器專用）
router.post("/notify", async (req, res) => {
  const data = req.body;
  console.log("📬 ㄋ綠界通知資料：", data);

  const { MerchantTradeNo, RtnCode, PaymentDate } = data;

  // ✅ 綠界付款成功才處理（RtnCode: 1 表示成功）
  if (RtnCode === "1") {
    try {
      const result = await pool.query(
        `UPDATE subscriptions
         SET status = 'paid', paid_at = $1
         WHERE MerchantTradeNo = $2
         RETURNING user_id, plan`,
        [PaymentDate, MerchantTradeNo]
      );

      const subscription = result.rows[0];

      // ✅ 同時更新會員狀態
      await pool.query(
        `UPDATE users
         SET subscription_plan = $1
         WHERE id = $2`,
        [subscription.plan, subscription.user_id]
      );

      console.log("✅ 資料庫更新成功");

      // ✅ 必須回傳 200 且字串 "1|OK"
      res.send("1|OK");
    } catch (error) {
      console.error("❌ 資料庫更新失敗", error);
      res.status(500).send("0|Error: " + error.message);
    }
  } else {
    res.status(400).send("0|交易未成功");
  }
});

module.exports = router;
