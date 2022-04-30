-- DropForeignKey
ALTER TABLE "users-pius-favorites" DROP CONSTRAINT "users-pius-favorites_piuId_fkey";

-- DropForeignKey
ALTER TABLE "users-pius-favorites" DROP CONSTRAINT "users-pius-favorites_userId_fkey";

-- AddForeignKey
ALTER TABLE "users-pius-favorites" ADD CONSTRAINT "users-pius-favorites_piuId_fkey" FOREIGN KEY ("piuId") REFERENCES "pius"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users-pius-favorites" ADD CONSTRAINT "users-pius-favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
