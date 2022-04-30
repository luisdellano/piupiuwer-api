import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateUser {
    email: string;
    password: string;
}

export class AuthenticateUserUseCase {
    async execute({ email, password }: IAuthenticateUser) {
        // Get email, password
        // Check if email is registered
        const user = await prisma.users.findFirst({
            where: { email },
        });
        if (!user) {
            throw new Error("Invalid email or password.");
        }

        // Check if password matches email
        const matchedPassword = await compare(password, user.password);
        if (!matchedPassword) {
            throw new Error("Invalid email or password.");
        }

        // Generate Token
        const token = sign({ email }, "8f23bbea5463ca32fee7632786c4e413", {
            subject: user.id,
            expiresIn: "1d",
        });

        user.password = "#####";
        return { user, token };
    }
}
