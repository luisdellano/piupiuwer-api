import { Request, Response } from "express";
import { FindFavoritedPiusUseCase } from "./FindFavoritedPiusUseCase";

export class FindFavoritedPiusController {
    async handle(request: Request, response: Response) {
        const findFavoritedPiusUseCase = new FindFavoritedPiusUseCase();

        const { userId } = request.query;

        const result = await findFavoritedPiusUseCase.execute({
            userId,
        });

        return response.json(result);
    }
}
