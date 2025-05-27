const { pgTable, integer, varchar, jsonb, timestamp } = require('drizzle-orm/pg-core');

const userCartSummary = pgTable('user_cart_summary', {
  user_id: integer('user_id').primaryKey(),
  username: varchar('username', { length: 255 }).notNull(),
  products: jsonb('products').notNull(), 
  created_at: timestamp('created_at').defaultNow(),
});

module.exports = {
  userCartSummary,
};