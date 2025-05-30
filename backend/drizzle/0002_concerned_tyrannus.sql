CREATE TABLE "subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"plan" varchar(20) NOT NULL,
	"price" integer NOT NULL,
	"status" varchar(20) DEFAULT 'pending' NOT NULL,
	"MerchantTradeNo" varchar(30) NOT NULL,
	"trade_no" varchar(30),
	"paid_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "subscription_plan" varchar(20) DEFAULT 'basic' NOT NULL;