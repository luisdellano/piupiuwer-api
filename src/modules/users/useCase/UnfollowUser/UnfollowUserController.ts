import { Request, Response } from "express";
import { UnfollowUserUseCase } from "./UnfollowUserUseCase";

export class UnfollowUserController {
    async handle(request: Request, response: Response) {
        const unfollowUserUseCase = new UnfollowUserUseCase();

        const { followUserId } = request.body;
        const { userId } = request;
        const result = await unfollowUserUseCase.execute({
            followedId: followUserId,
            followerId: userId,
        });

        return response.json(result);
    }
}
