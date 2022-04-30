import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateUser {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    cpf: string;
    phone: string;
    password: string;
    about: string;
    photo: string;
}

export class CreateUserUseCase {
    async execute({
        about,
        cpf,
        email,
        firstName,
        lastName,
        password,
        phone,
        photo,
        username,
    }: ICreateUser) {
        // User validation
        const userExists = await prisma.users.findFirst({
            where: { OR: { cpf, email: { mode: "insensitive" } } },
        });

        if (userExists) {
            throw new Error("Email or CPF already being used.");
        }

        // Encrypt Password
        const hashedPass = await hash(password, 10);

        // Save Client
        const user = await prisma.users.create({
            data: {
                about,
                cpf,
                email,
                firstName,
                lastName,
                password: hashedPass,
                phone,
                photo,
                username,
            },
        });

        user.password = "#####";
        return user;
    }
}
