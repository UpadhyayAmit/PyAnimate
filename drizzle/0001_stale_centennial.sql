CREATE TABLE "user_progress" (
	"user_id" varchar(255) PRIMARY KEY NOT NULL,
	"completed_lessons" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"completed_steps" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"completed_challenges" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"total_xp" integer DEFAULT 0 NOT NULL,
	"streak" integer DEFAULT 0 NOT NULL,
	"last_active_date" varchar(64),
	"last_lesson_id" varchar(100),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
