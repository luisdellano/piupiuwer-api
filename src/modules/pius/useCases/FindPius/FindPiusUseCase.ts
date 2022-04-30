import { prisma } from "../../../../database/prismaClient";

interface IFindPius {
    page: number;
    piusPerPage?: number;
}
export class FindPiusUseCase {
    async execute({ page, piusPerPage }: IFindPius) {
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

        const pius = await prisma.pius.findMany({
            skip: skip,
            take: piusPerPage,
            orderBy: { createdAt: "desc" },
        });

        return pius;
    }
}
