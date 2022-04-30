import { Request, Response } from "express";
import { FindPiusUseCase } from "./FindPiusUseCase";

export class FindPiusController {
    async handle(request: Request, response: Response) {
        const createPiuUseCase = new FindPiusUseCase();

        const { page, piusPerPage } = request.body;
        const result = await createPiuUseCase.execute({ page, piusPerPage });

        return response.json(result);
    }
}
