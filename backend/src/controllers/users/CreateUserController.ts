import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";
class CreateUserController{
  async handle(req: Request, res: Response){
    const { name, phone, email, password } = req.body;
    const createuserService = new CreateUserService();
    const user = await createuserService.execute({
      name,
      phone,
      email,
      password
    });
    return res.json(user)
  }
}

export { CreateUserController }