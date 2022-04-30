-- DropForeignKey
ALTER TABLE "PiusPiusReplies" DROP CONSTRAINT "PiusPiusReplies_childId_fkey";

-- DropForeignKey
ALTER TABLE "PiusPiusReplies" DROP CONSTRAINT "PiusPiusReplies_parentId_fkey";

-- DropForeignKey
ALTER TABLE "usersUsersFollowing" DROP CONSTRAINT "usersUsersFollowing_followedUserId_fkey";

-- DropForeignKey
ALTER TABLE "usersUsersFollowing" DROP CONSTRAINT "usersUsersFollowing_followingUserId_fkey";

-- AddForeignKey
ALTER TABLE "usersUsersFollowing" ADD CONSTRAINT "usersUsersFollowing_followingUserId_fkey" FOREIGN KEY ("followingUserId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersUsersFollowing" ADD CONSTRAINT "usersUsersFollowing_followedUserId_fkey" FOREIGN KEY ("followedUserId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PiusPiusReplies" ADD CONSTRAINT "PiusPiusReplies_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "pius"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PiusPiusReplies" ADD CONSTRAINT "PiusPiusReplies_childId_fkey" FOREIGN KEY ("childId") REFERENCES "pius"("id") ON DELETE CASCADE ON UPDATE CASCADE;
