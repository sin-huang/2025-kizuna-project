// 產生付款頁（不含發票）
import ECPay from "ecpay_aio_nodejs";
import dotenv from "dotenv";
dotenv.config();

const options = {
  OperationMode: 'Stage',
  MercProfile: {
    MerchantID: process.env.ECPAY_MERCHANT_ID,
    HashKey: process.env.ECPAY_HASH_KEY,
    HashIV: process.env.ECPAY_HASH_IV,
  },
  IsProjectContractor: false,
  IgnorePayment: [],
};

export async function createPayment(req, res) {
  const { plan } = req.body;
  const price = plan === "premium" ? 299 : 99;

  const merchantTradeNo = "SUB" + Date.now();
  const now = new Date();
  const merchantTradeDate = `${now.getFullYear()}/${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${now
    .getDate()
    .toString()
    .padStart(2, "0")} ${now
    .getHours()
    .toString()
    .padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  const data = {
    MerchantTradeNo: merchantTradeNo,
    MerchantTradeDate: merchantTradeDate,
    TotalAmount: String(price),
    TradeDesc: "Kizuna 訂閱",
    ItemName: `${plan}會員訂閱 x1`,
    ReturnURL: "http://localhost:3000/api/ecpay/notify", // 金流結果通知
    ClientBackURL: "http://localhost:5173/member",       // 使用者按返回
    OrderResultURL: "http://localhost:5173/member",       // 金流付款完成頁面
    ChoosePayment: "Credit",
    EncryptType: 1,
  };

  try {
    const ecpay = new ECPay(options, "Merchant");
    const html = ecpay.payment_client.aio_check_out_credit_onetime(data);
    res.send(html);
  } catch (err) {
    console.error("❌ 綠界產生失敗", err.message, err.stack);
    res.status(500).json({
      message: "產生綠界付款頁失敗",
      error: err.message,
    });
  }
}
