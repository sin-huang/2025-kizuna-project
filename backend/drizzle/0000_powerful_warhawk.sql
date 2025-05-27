CREATE TABLE "user_cart_summary" (
	"user_id" integer PRIMARY KEY NOT NULL,
	"username" varchar(255) NOT NULL,
	"products" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now()
);
