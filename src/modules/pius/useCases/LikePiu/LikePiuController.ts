import { Request, Response } from "express";
import { LikePiuUseCase } from "./LikePiuUseCase";

export class LikePiuController {
    async handle(request: Request, response: Response) {
        const likePiuCase = new LikePiuUseCase();

        const { piuId } = request.body;
        const { userId } = request;

        const result = await likePiuCase.execute({ piuId, userId });

        return response.json(result);
    }
}
