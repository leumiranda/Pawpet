import { Request, Response } from "express";
import { ListAnimalTypeService } from "../../services/animals/ListAnimalTypeService";


class ListAnimalTypeController {
  async handle(req: Request, res: Response) {
    const listAnimalTypeService = new ListAnimalTypeService();
    const category = await listAnimalTypeService.execute();


    return res.json(category);
  }
}

export { ListAnimalTypeController }