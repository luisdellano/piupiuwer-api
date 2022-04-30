import { prisma } from "../../../../database/prismaClient";

interface IUnfollowUser {
    followedId: string;
    followerId: string;
}

export class UnfollowUserUseCase {
    async execute({ followerId, followedId }: IUnfollowUser) {
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

        if (!checkRelation) {
            throw new Error("Current User does not yet follow this user.");
        }
        // Unmake Relation
        const followerRelation = await prisma.usersUsersFollowing.delete({
            where: { id: checkRelation.id },
        });

        // Update Piu
        await prisma.users.update({
            where: { id: followerId },
            data: { following: { decrement: 1 } },
        });
        await prisma.users.update({
            where: { id: followedId },
            data: { followers: { decrement: 1 } },
        });

        return await prisma.users.findFirst({
            where: { id: followerId },
            select: { username: true, following: true },
        });
    }
}
