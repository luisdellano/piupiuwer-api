-- CreateTable
CREATE TABLE "pius" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "favourites" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pius_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users-pius-likes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "piuId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users-pius-likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users-pius-favorites" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "piuId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users-pius-favorites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usersUsersFollowing" (
    "id" TEXT NOT NULL,
    "followedUserId" TEXT NOT NULL,
    "followingUserId" TEXT NOT NULL,

    CONSTRAINT "usersUsersFollowing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PiusPiusReplies" (
    "id" TEXT NOT NULL,
    "parentId" TEXT,
    "childId" TEXT,

    CONSTRAINT "PiusPiusReplies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users-pius-likes" ADD CONSTRAINT "users-pius-likes_piuId_fkey" FOREIGN KEY ("piuId") REFERENCES "pius"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users-pius-likes" ADD CONSTRAINT "users-pius-likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users-pius-favorites" ADD CONSTRAINT "users-pius-favorites_piuId_fkey" FOREIGN KEY ("piuId") REFERENCES "pius"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users-pius-favorites" ADD CONSTRAINT "users-pius-favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersUsersFollowing" ADD CONSTRAINT "usersUsersFollowing_followingUserId_fkey" FOREIGN KEY ("followingUserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersUsersFollowing" ADD CONSTRAINT "usersUsersFollowing_followedUserId_fkey" FOREIGN KEY ("followedUserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PiusPiusReplies" ADD CONSTRAINT "PiusPiusReplies_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "pius"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PiusPiusReplies" ADD CONSTRAINT "PiusPiusReplies_childId_fkey" FOREIGN KEY ("childId") REFERENCES "pius"("id") ON DELETE SET NULL ON UPDATE CASCADE;
