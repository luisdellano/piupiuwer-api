import { prisma } from "../../../../database/prismaClient";

interface IDeletePiu {
    userId: string;
    piuId: string;
}

export class DeletePiuUseCase {
    async execute({ piuId, userId }: IDeletePiu) {
        // Piu validation
        const userExists = await prisma.users.findFirst({
            where: { id: userId },
        });
        if (!userExists) {
            throw new Error("User does not exist.");
        }
        const foundPiu = await prisma.pius.findFirst({ where: { id: piuId } });
        if (!foundPiu) {
            throw new Error("Piu does not exist.");
        }

        const checkOwner = await prisma.pius.findFirst({
            where: { AND: { userId, id: piuId } },
        });

        if (!checkOwner) {
            throw new Error("Cannot delete not owned Pius.");
        }

        // Delete Piu
        await prisma.pius.delete({ where: { id: piuId } });

        return { success: true };
    }
}
