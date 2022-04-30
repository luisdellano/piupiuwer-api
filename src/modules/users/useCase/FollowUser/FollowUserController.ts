import { Request, Response } from "express";
import { FollowUserUseCase } from "./FollowUserUseCase";

export class FollowUserController {
    async handle(request: Request, response: Response) {
        const followUserController = new FollowUserUseCase();

        const { followUserId } = request.body;
        const { userId } = request;
        const result = await followUserController.execute({
            followedId: followUserId,
            followerId: userId,
        });

        return response.json(result);
    }
}
