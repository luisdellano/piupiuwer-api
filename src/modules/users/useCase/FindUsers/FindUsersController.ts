import { FindUsersUseCase } from "./FindUsersUseCase";
import { Request, Response } from "express";

export class FindUsersController {
    async handle(request: Request, response: Response) {
        const findUsersUseCase = new FindUsersUseCase();

        const { userId } = request.params;
        const result = await findUsersUseCase.execute(userId);

        return response.json(result);
    }
}
