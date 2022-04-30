import { prisma } from "../../../../database/prismaClient";

interface IFindFollowersUseCase {
    userId: string;
}

export class FindFollowersUseCase {
    async execute({ userId }: IFindFollowersUseCase) {
        console.log(userId);
        const followersUsers = await prisma.users.findFirst({
            where: { id: userId },
            select: {
                usersUsersFollowed: { select: { followingUser: true } },
            },
        });

        if (!followersUsers) {
            throw new Error("User does not exist.");
        }
        return followersUsers;
    }
}
