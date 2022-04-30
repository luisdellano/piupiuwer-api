import { prisma } from "../../../../database/prismaClient";

interface ILikePiu {
    piuId: string;
    userId: string;
}

export class LikePiuUseCase {
    async execute({ piuId, userId }: ILikePiu) {
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
        if (likedPiu) {
            throw new Error("Piu already liked.");
        }
        // Create Relation
        const likeRelation = await prisma.usersPiusLikes.create({
            data: {
                piuId,
                userId,
            },
        });

        // Update Piu
        await prisma.pius.update({
            where: { id: piuId },
            data: { likes: { increment: 1 } },
        });
        piu.likes = piu.likes + 1;
        return piu;
    }
}
