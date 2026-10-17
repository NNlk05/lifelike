ALTER TABLE "user" ALTER COLUMN "name" DROP NOT NULL;
--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "display_username";
