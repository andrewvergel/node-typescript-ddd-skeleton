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

  private async _validateRegister(data: object, next: (data?: any) => any) {
    try {
      await this.requestValidatorProvider.validateRegister(data);
      next();
    } catch (error) {
      next(error);
    }
  }

  private async _validateGetById(data: object, next: (data?: any) => any) {
    try {
      await this.requestValidatorProvider.validateGetById(data);
      next();
    } catch (error) {
      next(error);
    }
  }

  register(router: Router) {
    router.post(
      '/v1/users/register',
      (req: Request, _, next: NextFunction) => this._validateRegister({ body: req.body }, next),
      (req: Request, res: Response) => container.resolve(UsersControllerRepository).register(req, res)
    );
    router.get(
      '/v1/users/:id',
      (req: Request, _, next: NextFunction) => this._validateGetById({ body: req.params }, next),
      (req: Request, res: Response) => container.resolve(UsersControllerRepository).getById(req, res)
    );
  }
}
