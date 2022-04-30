import { prisma } from "../../../../database/prismaClient";

interface IFavoritePiu {
    piuId: string;
    userId: string;
}

export class FavoritePiuUseCase {
    async execute({ piuId, userId }: IFavoritePiu) {
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
        const favoritedPiu = await prisma.usersPiusFavorites.findFirst({
            where: { AND: { piuId, userId } },
        });
        if (favoritedPiu) {
            throw new Error("Piu already favorited.");
        }
        // Create Relation
        const favoritedRelation = await prisma.usersPiusFavorites.create({
            data: {
                piuId,
                userId,
            },
        });

        // Update Piu
        await prisma.pius.update({
            where: { id: piuId },
            data: { favourites: { increment: 1 } },
        });
        piu.favourites = piu.favourites + 1;
        return piu;
    }
}
