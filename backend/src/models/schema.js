const {
  pgTable,
  serial,
  varchar,
  char,
  integer,
  text,
  foreignKey,
  timestamp,
  jsonb,
} = require("drizzle-orm/pg-core");

// 使用者(註冊登入)表格 和個人介面的資料分開
const usersTable = pgTable("users", {
  id: serial().primaryKey().notNull(),
  username: varchar({ length: 100 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  raw_password: varchar({ length: 20 }).notNull(),
});

// 保存訊息的表格
const messagesTable = pgTable("messages", {
  id: serial().primaryKey().notNull(),
  room_id: integer().notNull(),
  sender_id: integer().notNull(),
  content: varchar({ length: 255 }).notNull(),
  created_at: timestamp().defaultNow().notNull(),
});

const userCartSummary = pgTable("user_cart_summary", {
  user_id: integer("user_id").primaryKey(),
  username: varchar("username", { length: 255 }),
  products: jsonb("products"),
  quantity: integer("quantity"),
  created_at: timestamp("created_at", { mode: "string" }).defaultNow(),
});

module.exports = {
  usersTable,
  messagesTable,
  userCartSummary,
};
