CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(100) NOT NULL,
	"password" varchar(255) NOT NULL,
	"raw_password" varchar(20) NOT NULL,
	"subscription_plan" integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"room_id" integer NOT NULL,
	"sender_id" integer NOT NULL,
	"content" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"plan" varchar(20) NOT NULL,
	"price" integer NOT NULL,
	"status" varchar(20) NOT NULL,
	"MerchantTradeNo" varchar(30) NOT NULL,
	"trade_no" varchar(30),
	"paid_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subscription_plans" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"price" integer NOT NULL,
	"description" varchar(255) DEFAULT '尚未填寫描述'
);
