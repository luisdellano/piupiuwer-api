import { Request, Response } from "express";
import { FindFollowersUseCase } from "./FindFollowersUseCase";

export class FindFollowersController {
    async handle(request: Request, response: Response) {
        const findFollowersUseCase = new FindFollowersUseCase();

        const { userId } = request.params;
        const result = await findFollowersUseCase.execute({ userId });

        return response.json(result);
    }
}
