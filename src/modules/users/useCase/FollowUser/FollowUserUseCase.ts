import { prisma } from "../../../../database/prismaClient";

interface IFollowUser {
    followedId: string;
    followerId: string;
}

export class FollowUserUseCase {
    async execute({ followerId, followedId }: IFollowUser) {
        const user = await prisma.users.findFirst({
            where: {
                id: followedId,
            },
        });
        if (!user) {
            throw new Error("User does not exist.");
        }

        const checkRelation = await prisma.usersUsersFollowing.findFirst({
            where: {
                followedUserId: followedId,
                followingUserId: followerId,
            },
        });

        if (checkRelation) {
            throw new Error("Cannot follow user more than 1 time.");
        }
        const checkSelfRelation = await prisma.usersUsersFollowing.findFirst({
            where: {
                followedUserId: followerId,
                followingUserId: followerId,
            },
        });
        if (checkSelfRelation) {
            throw new Error("You cannot follow yourself.");
        }
        // Create Relation
        const followerRelation = await prisma.usersUsersFollowing.create({
            data: { followingUserId: followerId, followedUserId: followedId },
        });

        // Update Piu
        await prisma.users.update({
            where: { id: followerId },
            data: { following: { increment: 1 } },
        });
        await prisma.users.update({
            where: { id: followedId },
            data: { followers: { increment: 1 } },
        });

        return await prisma.users.findFirst({
            where: { id: followerId },
            select: { username: true, following: true },
        });
    }
}
