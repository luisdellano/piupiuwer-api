import { prisma } from "../../../../database/prismaClient";

interface IFindFavoritedPius {
    userId?: string;
}
export class FindFavoritedPiusUseCase {
    async execute({ userId }: IFindFavoritedPius) {
        if (!userId) {
            throw new Error("An userId must be specified in query params.");
        }
        const foundUser = await prisma.users.findFirst({
            where: { id: userId },
        });
        if (!foundUser) {
            throw new Error("User does not exist.");
        }

        const favoritedPius = await prisma.users.findMany({
            where: { id: userId },
            select: {
                usersPiusFavorites: { select: { Pius: true } },
            },
        });

        return favoritedPius;
    }
}
