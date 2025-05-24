const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");
const authMiddleware = require("../middleware/auth.js");
const ecpay = require("ecpay_aio_nodejs");
const dotenv = require("dotenv");
dotenv.config();

const options = {
  OperationMode: "Test", //測試環境是Test不是Stage，正式環境是Production
  MercProfile: {
    MerchantID: process.env.ECPAY_MERCHANT_ID,
    HashKey: process.env.ECPAY_HASH_KEY,
    HashIV: process.env.ECPAY_HASH_IV,
  },
  IsProjectContractor: false,
  IgnorePayment: [],
};

const create = new ecpay(options);

// ✅ 時間格式 helper
function getTaiwanDateTimeString() {
  const date = new Date();
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}`;
}

// ✅ 建立訂單（付款表單）
router.post("/create", authMiddleware, async (req, res) => {
  const { plan } = req.body;
  const price = plan === "premium" ? 299 : 99;
  const userId = req.user.id;
  const merchantTradeNo = "SUB" + Date.now();

  try {
    await pool.query(
      `INSERT INTO subscriptions (user_id, plan, price, status, MerchantTradeNo)
       VALUES ($1, $2, $3, 'pending', $4)`,
      [userId, plan, price, merchantTradeNo]
    );

    const form = create.payment_client.aio_check_out_all(
      {
        MerchantTradeNo: merchantTradeNo,
        MerchantTradeDate: getTaiwanDateTimeString(),
        TotalAmount: price.toString(),
        TradeDesc: "Kizuna 交友訂閱",
        ItemName: `${plan}會員訂閱 x1`,
        ReturnURL: process.env.ECPAY_RETURN_URL,
        ClientBackURL: "http://localhost:5173/member",
        PaymentType: "aio",
        ChoosePayment: "Credit",
        EncryptType: 1,
        },
    );

    res.send(form); // ✅ form 是完整 HTML 字串
  } catch (error) {
    console.error("❌ 建立訂單失敗", error);
    res.status(500).json({ message: "訂單建立失敗", reason: error.message });
  }
});

// ✅ 綠界通知（付款成功回傳）
router.post("/notify", async (req, res) => {
  const { MerchantTradeNo, RtnCode, PaymentDate, TradeNo } = req.body;
  console.log("📬 綠界通知資料：", req.body);

  if (RtnCode === "1") {
    try {
      // ✅ 更新 subscriptions：包含 paid_at、trade_no
      const result = await pool.query(
        `UPDATE subscriptions
         SET status = 'paid', paid_at = $1, trade_no = $2
         WHERE MerchantTradeNo = $3
         RETURNING user_id, plan`,
        [PaymentDate, TradeNo, MerchantTradeNo]
      );

      const sub = result.rows[0];

      // ✅ 同步更新 users.subscription_plan
      await pool.query(
        `UPDATE users SET subscription_plan = $1 WHERE id = $2`,
        [sub.plan, sub.user_id]
      );

      console.log("✅ 資料庫更新成功");
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
