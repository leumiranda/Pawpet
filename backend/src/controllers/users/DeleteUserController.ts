import { Request, Response } from "express";
import { DeleteUserService } from "../../services/users/DeleteUserService"


class DeleteUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id as string;

    const deleteUser = new DeleteUserService();

    const user = await deleteUser.execute({
      user_id
    });

    return res.json(user);
  }

}

export { DeleteUserController }