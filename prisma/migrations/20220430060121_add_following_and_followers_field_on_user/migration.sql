-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "followers" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "following" INTEGER NOT NULL DEFAULT 0;
