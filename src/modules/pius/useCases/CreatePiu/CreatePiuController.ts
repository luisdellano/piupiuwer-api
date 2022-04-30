import { Request, Response } from "express";
import { CreatePiuUseCase } from "./CreatePiuUseCase";

export class CreatePiuController {
    async handle(request: Request, response: Response) {
        const createPiuUseCase = new CreatePiuUseCase();

        const { message } = request.body;

        const { userId } = request;

        const result = await createPiuUseCase.execute({
            message,
            userId,
        });

        return response.json(result);
    }
}
