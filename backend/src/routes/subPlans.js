const express = require("express");
const router = express.Router();
const { db } = require("../db");
const { subscriptionPlansTable } = require("../db/schema");

router.get("/", async (req, res) => {
  try {
    const plans = await db.select().from(subscriptionPlansTable);
    res.json(plans);
  } catch (err) {
    console.error("❌ 讀取方案失敗", err);
    res.status(500).json({ error: "無法讀取訂閱方案" });
  }
});

module.exports = router;
