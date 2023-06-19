import { Request, Response } from "express";
import { CreatePetService } from "../../services/pets/CreatePetService";

class CreatePetController {
  async handle(req: Request, res: Response) {
    const { dateOfBirth, breed_id} = req.body;

    const createPetService = new CreatePetService();

    if(!req.file){
      throw new Error("error upload file")
    }else{
      const { originalname, filename: banner } = req.file;
      const pet = await createPetService.execute({
        dateOfBirth,
        banner,
        breed_id,
      });
      return res.json(pet)
    }

  }
}

export { CreatePetController }