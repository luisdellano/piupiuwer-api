import { prisma } from "../../../../database/prismaClient";

export class FindUsersUseCase {
    async execute(userInfo?: string) {
        if (!userInfo) {
            const user = await prisma.users.findMany({
                where: {},
                orderBy: { username: "asc" },
            });
            return user;
        }

        const userWithId = await prisma.users.findFirst({
            where: { id: userInfo },
        });
        if (!userWithId) {
            const userWithUsername = await prisma.users.findMany({
                where: { username: { contains: userInfo } },
            });

            if (userWithUsername.length === 0) {
                throw new Error("Invalid route param.");
            }

            return userWithUsername;
        }
        return userWithId;
    }
}
