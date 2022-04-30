import { prisma } from "../../../../database/prismaClient";

export class FindUsersUseCase {
    async execute(userId?: string) {
        if (!userId) {
            const user = await prisma.users.findMany({
                where: {},
                orderBy: { username: "asc" },
            });
            return user;
        }

        const user = await prisma.users.findFirst({
            where: { id: userId },
        });
        if (!user) {
            throw new Error("User does not exist.");
        }
        return user;
    }
}
