import { Request, Response } from 'express';

export interface IUsersControllerRepository {
  register(req: Request, res: Response): Promise<Response>;
}
