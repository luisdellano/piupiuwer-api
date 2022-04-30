import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreatePiu {
    message: string;
    userId: string;
}

export class CreatePiuUseCase {
    async execute({ message, userId }: ICreatePiu) {
        // Piu validation
        const foundUser = prisma.users.findFirst({ where: { id: userId } });
        if (!foundUser) {
            throw new Error("User does not exist.");
        }
        if ((message = "")) {
            throw new Error("Piu cannot be empty.");
        }
        if (message.length > 280) {
            throw new Error("Piu excedes max. character length");
        }

        // Save Piu
        const piu = await prisma.pius.create({
            data: {
                message,
                userId,
            },
        });

        return piu;
    }
}
