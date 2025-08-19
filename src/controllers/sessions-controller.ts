import { Request, Response } from "express";

class SessionsController {
    async create(request: Request, response: Response) {
        return response.json({
            message: process.env.USER_NAME,
            code: process.env.USER_CODE,
            id: process.env.USER_ID,
        });
    }
}

export { SessionsController };
