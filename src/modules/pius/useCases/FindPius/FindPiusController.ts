import { Request, Response } from "express";
import { FindPiusUseCase } from "./FindPiusUseCase";

export class FindPiusController {
    async handle(request: Request, response: Response) {
        const createPiuUseCase = new FindPiusUseCase();
        const { userId } = request;
        const result = await createPiuUseCase.execute();
        return response.json(result);
    }
}
