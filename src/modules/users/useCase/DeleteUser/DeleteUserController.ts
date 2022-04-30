import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    async handle(request: Request, response: Response) {
        const deleteUserUseCase = new DeleteUserUseCase();

        const { userId } = request;

        const result = await deleteUserUseCase.execute({ userId });

        return response.json(result);
    }
}
