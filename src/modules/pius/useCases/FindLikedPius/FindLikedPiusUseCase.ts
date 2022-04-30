import { prisma } from "../../../../database/prismaClient";

interface IFindLikedPius {
    userId: string;
}
export class FindLikedPiusUseCase {
    async execute({ userId }: IFindLikedPius) {
        const foundUser = await prisma.users.findFirst({
            where: { id: userId },
        });
        if (!foundUser) {
            throw new Error("User does not exist.");
        }

        const likedPius = await prisma.users.findMany({
            where: { id: userId },
            select: {
                usersPiusLikes: { select: { Pius: true } },
            },
        });

        return likedPius;
    }
}
