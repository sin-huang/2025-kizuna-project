import express from "express";
import { createPayment } from "../controllers/ecpayPaymentController.js";

const router = express.Router();

router.post("/pay", createPayment); // POST /api/ecpay/pay

export default router;