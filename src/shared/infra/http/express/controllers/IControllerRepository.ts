import { Request, Response } from 'express';

export interface IControllerRepository {
  run(req: Request, res: Response): Promise<void>;
}
