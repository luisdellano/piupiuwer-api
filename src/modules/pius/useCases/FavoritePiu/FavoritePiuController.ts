import { Request, Response } from "express";
import { FavoritePiuUseCase } from "./FavoritePiuUseCase";

export class FavoritePiuController {
    async handle(request: Request, response: Response) {
        const favoritePiuUseCase = new FavoritePiuUseCase();

        const { piuId } = request.body;
        const { userId } = request;

        const result = await favoritePiuUseCase.execute({ piuId, userId });

        return response.json(result);
    }
}
