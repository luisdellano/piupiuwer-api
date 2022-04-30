import { prisma } from "../../../../database/prismaClient";

interface IDeleteUser {
    userId: string;
}
export class DeleteUserUseCase {
    async execute({ userId }: IDeleteUser) {
        const userExists = await prisma.users.findFirst({
            where: { id: userId },
        });

        if (!userExists) {
            throw new Error("User does not exist.");
        }

        await prisma.users.delete({ where: { id: userId } });
        return { success: true };
    }
}
