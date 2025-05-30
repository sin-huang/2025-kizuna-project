const {
  pgTable,
  serial,
  varchar,
  char,
  integer,
  text,
  foreignKey,
  timestamp,
} = require("drizzle-orm/pg-core");

// 使用者(註冊登入)表格 和個人介面的資料分開
const usersTable = pgTable("users", {
  id: serial().primaryKey().notNull(),
  username: varchar({ length: 100 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  raw_password: varchar({ length: 20 }).notNull(),
  subscription_plan: varchar({ length: 20 }).default("免費").notNull(),
});

// 訂閱訂單資料
const subscriptionsTable = pgTable("subscriptions", {
  id: serial().primaryKey().notNull(), 
  user_id: integer().notNull(), 
  plan: varchar({ length: 20 }).notNull(), 
  price: integer().notNull(), 
  status: varchar({ length: 20 }).notNull(), // 狀態：pending, paid
  MerchantTradeNo: varchar({ length: 30 }).notNull(), // 綠界自訂編號（不能重複）
  trade_no: varchar({ length: 30 }), // 綠界平台回傳的交易編號
  paid_at: timestamp(), 
  created_at: timestamp().defaultNow().notNull(),
});

// 保存訊息的表格
const messagesTable = pgTable("messages", {
  id: serial().primaryKey().notNull(),
  room_id: integer().notNull(),
  sender_id: integer().notNull(),
  content: varchar({ length: 255 }).notNull(),
  created_at: timestamp().defaultNow().notNull(),
});

module.exports = {
  usersTable,
  messagesTable,
  subscriptionsTable
}