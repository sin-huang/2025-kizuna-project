const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.js");
const ecpay = require("ecpay_aio_nodejs");
const dotenv = require("dotenv");
const { db } = require("../db"); 
const { subscriptionsTable, usersTable } = require("../db/schema.js");
const { eq } = require("drizzle-orm");
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
// console.log(new Date().toString()); //檢查時區
// ✅ 建立訂單（付款表單）
router.post("/create", authMiddleware, async (req, res) => {
  const { plan } = req.body;
  const price = plan === "premium" ? 299 : 99;
  const userId = req.user.id;
  const merchantTradeNo = "SUB" + Date.now();

  try {
    await db.insert(subscriptionsTable).values({
      user_id: userId,
      plan,
      price,
      status: "pending",
      MerchantTradeNo: merchantTradeNo,
      created_at: new Date(),
    });

    const form = create.payment_client.aio_check_out_all({
      MerchantTradeNo: merchantTradeNo,
      MerchantTradeDate: getTaiwanDateTimeString(),
      TotalAmount: price.toString(),
      TradeDesc: "Kizuna 交友訂閱",
      ItemName: `${plan}會員訂閱 x1`,
      ReturnURL: process.env.ECPAY_RETURN_URL,
      ClientBackURL: "http://localhost:5173/member",
      PaymentType: "aio",
      EncryptType: 1,
    });

    res.send(form); // ✅ form 是完整 HTML 字串
  } catch (error) {
    console.error("❌ 建立訂單失敗", error);
    res.status(500).json({ message: "訂單建立失敗", reason: error.message });
  }
});

// ✅ 綠界通知（付款成功回傳）
router.post("/notify", async (req, res) => {
  // console.log("🔍 req.body:", req.body);
  const { MerchantTradeNo, RtnCode, PaymentDate, TradeNo } = req.body;
  if (RtnCode === "1") {
    try {
      // 1️⃣ 先查訂單
      const [order] = await db
        .select()
        .from(subscriptionsTable)
        .where(eq(subscriptionsTable.MerchantTradeNo, MerchantTradeNo));

      if (!order) return res.status(404).send("0|訂單不存在");

      // 2️⃣ 更新訂單狀態
      await db
        .update(subscriptionsTable)
        .set({
          status: "paid",
          paid_at: new Date(PaymentDate),
          trade_no: TradeNo,
        })
        .where(eq(subscriptionsTable.MerchantTradeNo, MerchantTradeNo));

      // 3️⃣ 更新會員目前方案
      await db
        .update(usersTable)
        .set({ subscription_plan: order.plan })
        .where(eq(usersTable.id, order.user_id));

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
