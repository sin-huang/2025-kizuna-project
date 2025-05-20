import express from "express";
import cors from "cors";
import authMiddleware from "./middleware/auth.js";
import * as authController from "./controllers/authControllers.js";
// 這邊也要匯入 dotenv 並 dotenv.config()
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API 在這設定前端打什麼 後端去執行哪個方法
app.post("/api/register", authController.register);
app.post("/api/login", authController.login);
app.post("/api/refresh", authController.refresh);

// 測試需要 token 的 API
app.get("/api/me", authMiddleware, (req, res) => {
  res.json({ message: "驗證成功", user: req.user });
});

app.listen(3000, () =>
  console.log("✅ Server running on http://localhost:3000")
);
