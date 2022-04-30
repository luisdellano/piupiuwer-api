import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export async function ensureAuthenticateUser(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "Missing Token",
        });
    }

    // Bearer token
    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(
            token,
            "8f23bbea5463ca32fee7632786c4e413"
        ) as IPayLoad;

        request.userId = sub;

        return next();
    } catch (err) {
        return response.status(401).json({ message: "Invalid Token" });
    }
}
