import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new Error("JWT token is missing");
    }

    const [, token] = authHeader.split(" ");
    const { sub: user_id } = verify(token, authConfig.jwt.secret);

    request.user = {
        id: String(user_id),
    };

    return next();
}
