import { Request } from 'express';

interface RequestWithUserId extends Request {
  user_id: string;
}

export { RequestWithUserId };