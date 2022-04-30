import { Request, Response } from "express";
import { FindLikedPiusUseCase } from "./FindLikedPiusUseCase";

export class FindLikedPiusController {
    async handle(request: Request, response: Response) {
        const findLikedPiusUseCase = new FindLikedPiusUseCase();

        const { userId } = request.query;

        const result = await findLikedPiusUseCase.execute({
            userId,
        });

        return response.json(result);
    }
}
