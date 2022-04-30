import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const authenticateUserUseCase = new AuthenticateUserUseCase();

        const { email, password } = request.body;

        const result = await authenticateUserUseCase.execute({
            email,
            password,
        });

        return response.json(result);
    }
}
