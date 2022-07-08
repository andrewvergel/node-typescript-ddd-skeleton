import { Router, Request, Response } from 'express';
import StatusControllerRepository from '../controllers/StatusControllerRepository';
import { container } from 'tsyringe';

export const register = (router: Router) => {
  router.get('/status', (req: Request, res: Response) => container.resolve(StatusControllerRepository).run(req, res));
};
