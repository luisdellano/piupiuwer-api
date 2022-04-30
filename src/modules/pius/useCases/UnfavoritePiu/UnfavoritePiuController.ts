import { Request, Response } from "express";
import { UnfavoriteUseCase } from "./UnfavoritePiuUseCase";

export class UnfavoritePiuController {
    async handle(request: Request, response: Response) {
        const unfavoritePiuUseCase = new UnfavoriteUseCase();

        const { piuId } = request.body;
        const { userId } = request;

        const result = await unfavoritePiuUseCase.execute({ piuId, userId });

        return response.json(result);
    }
}
