//付款頁面
import ECPay from "ecpay_aio_nodejs";
import dotenv from "dotenv";
dotenv.config();

// ✅ 綠界設定：Stage 模式（測試用）
const options = {
  OperationMode: "Stage", // "Stage" 為測試環境，正式要改 "Production"
  MercProfile: {
    MerchantID: process.env.ECPAY_MERCHANT_ID,
    HashKey: process.env.ECPAY_HASH_KEY,
    HashIV: process.env.ECPAY_HASH_IV,
    aioCheckOutUrl: 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5',
  },
  IsProjectContractor: false,
  IgnorePayment: [],
};

// ✅ 主函式：建立訂單並產出付款頁 HTML
export async function createPayment(req, res) {
  const { plan } = req.body;

  if (!plan || !["basic", "premium"].includes(plan)) {
    return res.status(400).json({ message: "方案錯誤或缺少 plan" });
  }

  const price = plan === "premium" ? 299 : 99;
  const merchantTradeNo = "SUB" + Date.now();

  const now = new Date();
  const merchantTradeDate = `${now.getFullYear()}/${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${now.getDate().toString().padStart(2, "0")} ${now
    .getHours()
    .toString()
    .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  // ✅ 設定要送出的參數
  const data = {
    MerchantTradeNo: merchantTradeNo,
    MerchantTradeDate: merchantTradeDate,
    TotalAmount: String(price),
    TradeDesc: "Kizuna 訂閱",
    ItemName: `${plan}會員訂閱 x1`,
    ReturnURL: "http://localhost:3000/api/ecpay/notify", // 綠界背景通知（重要）
    ClientBackURL: "http://localhost:5173/member",       // 使用者點返回的網址
    OrderResultURL: "http://localhost:5173/member",      // 付款完會跳轉這
    ChoosePayment: "Credit",
    EncryptType: 1,
  };

 try {
    const ecpay = new ECPay(options, "Merchant");
    const innerForm = ecpay.payment_client.aio_check_out_credit_onetime(data);

    const html = `
      <form id="_form_aiochk" action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5" method="post">
        ${innerForm}
      </form>
      <script type="text/javascript">
      </script>
    `;

    res.send(html);
  } catch (err) {
    console.error("❌ 綠界產生失敗", err.message, err.stack);
    res.status(500).json({
      message: "產生綠界付款頁失敗",
      error: err.message,
    });
  }
}
