// 
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
};

export async function handlePaymentNotify(req, res) {
  try {
    const { MerchantTradeNo, TradeAmt, PaymentDate } = req.body;

    console.log("✅ 收到綠界通知", req.body);

    // 假資料（應從資料庫取得實際訂單內容）
    const invoiceData = {
      RelateNumber: "INV" + Date.now(), // 發票號碼自訂
      CustomerName: "測試企業股份有限公司",
      CustomerIdentifier: "00000000",
      CustomerPhone: "0912345678",
      CustomerEmail: "test@example.com",
      ClearanceMark: "1",
      Print: "1",
      Donation: "0",
      InvType: "07",
      InvoiceItemName: "Kizuna 訂閱",
      InvoiceItemCount: "1",
      InvoiceItemWord: "份",
      InvoiceItemPrice: TradeAmt,
      InvoiceItemTaxType: "1",
      InvoiceRemark: "感謝您的訂閱",
      DelayDay: "0",
      TaxType: "1",
      SalesAmount: TradeAmt,
    };

    const ecpay = new ECPay(options, "Merchant");
    const result = await ecpay.invoice_client.issue(invoiceData);

    console.log("✅ 成功開立發票", result);

    res.send("1|OK"); // 綠界要求這樣表示收到
  } catch (err) {
    console.error("❌ 處理金流通知失敗", err.message);
    res.status(500).send("0|Error");
  }
}
