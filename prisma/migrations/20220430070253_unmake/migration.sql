-- DropForeignKey
ALTER TABLE "pius" DROP CONSTRAINT "pius_userId_fkey";

-- AddForeignKey
ALTER TABLE "pius" ADD CONSTRAINT "pius_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
