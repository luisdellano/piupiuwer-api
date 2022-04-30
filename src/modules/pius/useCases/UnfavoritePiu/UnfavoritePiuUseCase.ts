import { prisma } from "../../../../database/prismaClient";

interface IUnfavoritePiu {
    piuId: string;
    userId: string;
}

export class UnfavoriteUseCase {
    async execute({ piuId, userId }: IUnfavoritePiu) {
        // Piu Validation
        const piu = await prisma.pius.findFirst({
            where: {
                id: piuId,
            },
        });
        if (!piu) {
            throw new Error("Piu does not exist.");
        }

        // Favorite Validation
        const favoritedPiu = await prisma.usersPiusFavorites.findFirst({
            where: { AND: { piuId, userId } },
        });
        if (!favoritedPiu) {
            throw new Error("Piu is not favorited.");
        }

        // Unmake Relation
        const favoriteRelation = await prisma.usersPiusFavorites.delete({
            where: {
                id: favoritedPiu.id,
            },
        });

        // Update Piu
        await prisma.pius.update({
            where: { id: piuId },
            data: { favourites: { decrement: 1 } },
        });
        piu.favourites = piu.favourites - 1;
        return piu;
    }
}
