-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "about" DROP NOT NULL,
ALTER COLUMN "photo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "pius" ALTER COLUMN "likes" SET DEFAULT 0,
ALTER COLUMN "favourites" SET DEFAULT 0;
