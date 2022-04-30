import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const createUserUseCase = new CreateUserUseCase();

        const {
            about,
            cpf,
            email,
            firstName,
            lastName,
            password,
            phone,
            photo,
            username,
        } = request.body;

        const result = await createUserUseCase.execute({
            about,
            cpf,
            email,
            firstName,
            lastName,
            password,
            phone,
            photo,
            username,
        });

        return response.json(result);
    }
}
