import passport from "./passport.js";
import express from "express";
import cors from "cors";
import authMiddleware from "./middleware/auth.js";
import * as authController from "./controllers/authControllers.js";
// 這邊也要匯入 dotenv 並 dotenv.config()
import dotenv from 'dotenv';
dotenv.config();

import cartRouter from './controllers/cart.js';
const app = express();
app.use(cors());
app.use(express.json());

// 掛載購物車路由
app.use('/api/cart',cartRouter)
app.use(passport.initialize());

// API 在這設定前端打什麼 後端去執行哪個方法
app.post("/api/register", authController.register);
app.post("/api/login", authController.login);
app.post("/api/refresh", authController.refresh);
app.get("/auth/google",authController.googleAuth);
app.get("/auth/google/callback",authController.googleAuthCallback);


// 測試需要 token 的 API
app.get("/api/me", authMiddleware, (req, res) => {
  res.json({ message: "驗證成功", user: req.user });
});

app.listen(3000, () =>
  console.log("✅ Server running on http://localhost:3000")
);
