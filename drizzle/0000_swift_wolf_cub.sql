CREATE TABLE "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_slug" varchar(100) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"user_name" varchar(255) NOT NULL,
	"user_avatar" text,
	"body" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "page_feedback" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_slug" varchar(100) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"vote" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "feedback_user_page" UNIQUE("page_slug","user_id")
);
--> statement-breakpoint
CREATE TABLE "reactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_slug" varchar(100) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"emoji" varchar(10) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "reactions_user_page_emoji" UNIQUE("page_slug","user_id","emoji")
);
