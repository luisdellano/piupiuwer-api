/*
  Warnings:

  - Made the column `parentId` on table `PiusPiusReplies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `childId` on table `PiusPiusReplies` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "PiusPiusReplies" DROP CONSTRAINT "PiusPiusReplies_childId_fkey";

-- DropForeignKey
ALTER TABLE "PiusPiusReplies" DROP CONSTRAINT "PiusPiusReplies_parentId_fkey";

-- AlterTable
ALTER TABLE "PiusPiusReplies" ALTER COLUMN "parentId" SET NOT NULL,
ALTER COLUMN "childId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "PiusPiusReplies" ADD CONSTRAINT "PiusPiusReplies_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "pius"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PiusPiusReplies" ADD CONSTRAINT "PiusPiusReplies_childId_fkey" FOREIGN KEY ("childId") REFERENCES "pius"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
