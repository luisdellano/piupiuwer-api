import { FindUsersUseCase } from "./FindUsersUseCase";
import { Request, Response } from "express";

export class FindUsersController {
    async handle(request: Request, response: Response) {
        const findUsersUseCase = new FindUsersUseCase();

        const { userInfo } = request.params;
        const result = await findUsersUseCase.execute(userInfo);

        return response.json(result);
    }
}
