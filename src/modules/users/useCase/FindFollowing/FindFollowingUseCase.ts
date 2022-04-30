import { prisma } from "../../../../database/prismaClient";

interface IFindFollowing {
    userId: string;
}

export class FindFollowingUseCase {
    async execute({ userId }: IFindFollowing) {
        console.log(userId);
        const followingUsers = await prisma.users.findFirst({
            where: { id: userId },
            select: {
                usersUsersFollowing: { select: { followedUser: true } },
            },
        });

        if (!followingUsers) {
            throw new Error("User does not exist.");
        }
        return followingUsers;
    }
}
