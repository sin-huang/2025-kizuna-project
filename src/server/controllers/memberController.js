import pool from "../db.js";

export async function getMemberInfo(req, res) {
  const userId = req.user.id;

  try {
    const userResult = await pool.query(
      "SELECT id, username FROM users WHERE id = $1",
      [userId]
    );
    const user = userResult.rows[0];

    const subResult = await pool.query(
      `SELECT plan, status, paid_at 
       FROM subscriptions 
       WHERE user_id = $1 
       ORDER BY created_at DESC 
       LIMIT 1`,
      [userId]
    );
    const subscription = subResult.rows[0] || null;

    res.json({ user, subscription });
  } catch (err) {
    console.error("❌ 查詢會員資料失敗", err);
    res.status(500).json({ message: "查詢會員資料失敗", error: err.message });
  }
}
