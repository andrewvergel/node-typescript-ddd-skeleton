import { Router, Request, Response } from 'express';
import UsersControllerRepository from '../controllers/UsersControllerRepository';
import { container } from 'tsyringe';

export const register = (router: Router) => {
  router.post('/v1/users/register', (req: Request, res: Response) =>
    container.resolve(UsersControllerRepository).register(req, res)
  );
};
