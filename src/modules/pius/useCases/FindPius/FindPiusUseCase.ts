import { prisma } from "../../../../database/prismaClient";

export class FindPiusUseCase {
    async execute() {
        const pius = await prisma.pius.findMany();

        return pius;
    }
}
