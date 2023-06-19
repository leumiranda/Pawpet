import { Request, Response } from "express";
import { ListByBreedService } from "../../services/breeds/ListByBreedService";

class ListByBreedController {
  async handle(req: Request, res: Response) {
    const animal_id = req.query.animal_id as string;
    const name = req.query.name as string;
    // de fato é uma string, 

    const listByBreed = new ListByBreedService();

    const products = await listByBreed.execute({
      animal_id,
      name: name,
    });

    return res.json(products)
  }
}

export { ListByBreedController }