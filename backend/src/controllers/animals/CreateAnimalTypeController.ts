import { Request, Response } from "express";
import { CreateAnimalTypeService } from "../../services/animals/CreateAnimalTypeService";
class CreateAnimalTypeController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const createAnimalTypeService = new CreateAnimalTypeService();

    const category = await createAnimalTypeService.execute({
      name
    });

    return res.json(category);
  }
}



export { CreateAnimalTypeController }