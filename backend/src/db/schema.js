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
});

// 保存訊息的表格
const messagesTable = pgTable("messages", {
  id: serial().primaryKey().notNull(),
  room_id: integer().notNull(),
  sender_id: integer().notNull(),
  content: varchar({ length: 255 }).notNull(),
  created_at: timestamp().defaultNow().notNull(),
});

// 使用者個人簡介(地區、興趣)
const profileTable = pgTable("profile", {
  // 連接到 usersTable
  user_id: integer().primaryKey().references(() => usersTable.id).notNull(),
  gender: varchar({ length: 1 }).notNull(),
  bio: varchar({ length: 255 }),
  age: integer().notNull(),
  location: varchar({ length: 31}).notNull(),
  zodiac:  varchar({ length: 15}).notNull(),
  mbti: varchar({ length: 5}).notNull(),
  job: varchar({ length: 15}).notNull(),
  interest: varchar({ length: 15}).array().notNull(),
  orientation: varchar({ length: 15}).notNull(),
});

module.exports = {
  usersTable,
  messagesTable,
  profileTable
}