-- DropForeignKey
ALTER TABLE "users-pius-likes" DROP CONSTRAINT "users-pius-likes_piuId_fkey";

-- DropForeignKey
ALTER TABLE "users-pius-likes" DROP CONSTRAINT "users-pius-likes_userId_fkey";

-- AddForeignKey
ALTER TABLE "users-pius-likes" ADD CONSTRAINT "users-pius-likes_piuId_fkey" FOREIGN KEY ("piuId") REFERENCES "pius"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users-pius-likes" ADD CONSTRAINT "users-pius-likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
