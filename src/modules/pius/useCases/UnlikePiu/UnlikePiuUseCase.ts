import { prisma } from "../../../../database/prismaClient";

interface IUnlikePiu {
    piuId: string;
    userId: string;
}

export class UnlikePiuUseCase {
    async execute({ piuId, userId }: IUnlikePiu) {
        // Piu Validation
        const piu = await prisma.pius.findFirst({
            where: {
                id: piuId,
            },
        });
        if (!piu) {
            throw new Error("Piu does not exist.");
        }

        // Like Validation
        const likedPiu = await prisma.usersPiusLikes.findFirst({
            where: { AND: { piuId, userId } },
        });
        if (!likedPiu) {
            throw new Error("Piu already not liked.");
        }

        // Unmake Relation
        const favoriteRelation = await prisma.usersPiusLikes.delete({
            where: {
                id: likedPiu.id,
            },
        });

        // Update Piu
        await prisma.pius.update({
            where: { id: piuId },
            data: { likes: { decrement: 1 } },
        });
        piu.likes = piu.likes - 1;
        return piu;
    }
}
