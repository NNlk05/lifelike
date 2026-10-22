ALTER TABLE "article" ADD COLUMN "status" text DEFAULT 'submitted' NOT NULL;--> statement-breakpoint
ALTER TABLE "article" ADD COLUMN "reviewed_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "article" ADD COLUMN "reviewed_by_id" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" text DEFAULT 'user' NOT NULL;--> statement-breakpoint
ALTER TABLE "article" ADD CONSTRAINT "article_reviewed_by_id_user_id_fk" FOREIGN KEY ("reviewed_by_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;