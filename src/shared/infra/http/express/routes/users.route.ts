import { Router, Request, Response, NextFunction } from 'express';
import UsersControllerRepository from '../controllers/UsersControllerRepository';
import { container, inject, injectable } from 'tsyringe';
import IRequestValidatorProvider from 'shared/containers/provider/RequestValidatorProvider/models/IRequestValidatorProvider';

@injectable()
export default class UsersRoute {
  constructor(
    @inject('RequestValidatorProvider')
    private requestValidatorProvider: IRequestValidatorProvider
  ) {}

  register(router: Router) {
    router.post(
      '/v1/users/register',
      (req: Request, _, next: NextFunction) => this.requestValidatorProvider.validate({ body: req.body }, next),
      (req: Request, res: Response) => container.resolve(UsersControllerRepository).register(req, res)
    );
  }
}
