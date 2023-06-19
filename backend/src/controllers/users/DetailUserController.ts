import { Request, Response } from "express";
import { DetailUserService } from "../../services/users/DetailUserService";
import { RequestWithUserId } from "../../@types/express/RequestWithUserId";

class DetailUserController{
  async handle(req: RequestWithUserId, res: Response){

    const user_id = req.user_id;

    const detailUserService = new DetailUserService();
    const user = await detailUserService.execute(user_id);
    return res.json(user);

  }
}

export { DetailUserController };
