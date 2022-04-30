import { Request, Response } from "express";
import { UnlikePiuUseCase } from "./UnlikePiuUseCase";

export class UnlikePiuController {
    async handle(request: Request, response: Response) {
        const unlikePiuUseCase = new UnlikePiuUseCase();

        const { piuId } = request.body;
        const { userId } = request;

        const result = await unlikePiuUseCase.execute({ piuId, userId });

        return response.json(result);
    }
}
