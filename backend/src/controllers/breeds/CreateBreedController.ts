import { Request, Response } from "express";
import { CreateBreedService } from "../../services/breeds/CreateBreedService";
class CreateBreedController{
  async handle(req: Request, res: Response){
    const {name, animal_id} = req.body;
    const createBreedController = new CreateBreedService();

    const category = await createBreedController.execute({
      name,
      animal_id,
    });

    return res.json(category);
  }
}



export { CreateBreedController }