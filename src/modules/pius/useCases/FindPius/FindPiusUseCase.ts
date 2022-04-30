import { prisma } from "../../../../database/prismaClient";

interface IFindPius {
    page: number;
    piusPerPage?: number;
    userId?: string;
}
export class FindPiusUseCase {
    async execute({ page, piusPerPage, userId }: IFindPius) {
        piusPerPage = piusPerPage || 10;

        if (page < 0) {
            throw new Error("page must be equal or greater than 0.");
        }

        const totalPius = await prisma.pius.count();
        if (piusPerPage > totalPius) {
            piusPerPage = totalPius;
        }

        let skip = page * piusPerPage - 1;

        if (skip < 0) {
            skip = 0;
        }

        const existUser = await prisma.users.findFirst({
            where: { id: userId },
        });
        if (!existUser) {
            throw new Error("User does not exist.");
        }
        if (userId) {
            const pius = await prisma.pius.findMany({
                where: { userId },
                skip: skip,
                take: piusPerPage,
                include: { user: {} },
                orderBy: { createdAt: "desc" },
            });
            return pius;
        }
        const pius = await prisma.pius.findMany({
            skip: skip,
            take: piusPerPage,
            include: { user: {} },
            orderBy: { createdAt: "desc" },
        });
        return pius;
    }
}
