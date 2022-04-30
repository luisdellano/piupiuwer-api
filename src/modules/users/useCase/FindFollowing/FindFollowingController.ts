import { Request, Response } from "express";
import { FindFollowingUseCase } from "./FindFollowingUseCase";

export class FindFollowingController {
    async handle(request: Request, response: Response) {
        const findFollowingUseCase = new FindFollowingUseCase();

        const { userId } = request.params;
        const result = await findFollowingUseCase.execute({ userId });
        return response.json(result);
    }
}
