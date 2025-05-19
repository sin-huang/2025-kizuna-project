import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import pool from "../db.js";
// 記得 匯入 dotenv !!! 這樣才會成功載入 .env檔案中的環境變數到 process.env裡
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;
// debug
console.log(`JWT_SECRET: ${JWT_SECRET}`);
console.log(`REFRESH_SECRET: ${REFRESH_SECRET}`);

export async function register(req, res) {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  // 正式環境要拿掉raw_password欄位
  try {
    await pool.query("INSERT INTO users (username, password, raw_password) VALUES ($1, $2, $3)", [
      username,
      hashed,
      password,
    ]);
    res.json({ message: "註冊成功" });
  } catch (error) {
    res
      .status(400)
      .json({
        message: "帳號已存在或其他錯誤",
        reason: error.message || "未知原因",
      });
  }
}

export async function login(req, res) {
  const { username, password } = req.body;
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  const user = result.rows[0];

  try {
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, {
        expiresIn: "7d",
      });
      res.json({ accessToken, refreshToken });
    } else {
      res.status(401).json({ message: "帳號或密碼錯誤" });
    }
  } catch (error) {
    console.error("❌ Login failed:", error);
    return res.status(500).json({ message: "登入失敗，請稍後再試" });
  }
}
export async function refresh(req, res) {
  const { refreshToken } = req.body;
  if (!refreshToken)
    return res.status(401).json({ message: "未帶 refreshToken" });

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
    const newAccessToken = jwt.sign({ id: decoded.id }, JWT_SECRET, {
      expiresIn: "15m",
    });
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res
      .status(401)
      .json({ message: "Refresh Token 無效或過期", reason: error.message });
  }
}
