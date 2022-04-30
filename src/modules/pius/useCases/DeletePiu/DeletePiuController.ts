import { Request, Response } from "express";
import { DeletePiuUseCase } from "./DeletePiuUseCase";

export class DeletePiuController {
    async handle(request: Request, response: Response) {
        const deletePiuController = new DeletePiuUseCase();

        const { userId } = request;
        const { piuId } = request.body;

        const result = await deletePiuController.execute({
            piuId,
            userId,
        });

        return response.json(result);
    }
}
