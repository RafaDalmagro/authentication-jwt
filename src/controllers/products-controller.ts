import { Request, Response } from "express";

class ProductsController {
    async index(request: Request, response: Response) {
        return response.json("List of products");
    }

    async create(request: Request, response: Response) {
        return response.json("Product created");
    }
}

export { ProductsController };
