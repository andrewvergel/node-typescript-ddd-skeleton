import { Request, Response } from 'express';
import { IUsersControllerRepository } from './IUsersControllerRepository';
import UsersRegisterService from '../../../../../users/domain/UsersRegisterService';
import UsersByIdService from '../../../../../users/domain/UsersByIdService';
import { container } from 'tsyringe';

export default class UserControllerRepository implements IUsersControllerRepository {
  async register(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const { username, password } = body;
    const userRegisterService = container.resolve(UsersRegisterService);
    const result = await userRegisterService.execute({ username, password });
    return res.json(result);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { params } = req;
    const { id } = params;
    const userRegisterService = container.resolve(UsersByIdService);
    const result = await userRegisterService.execute({ id });
    return res.json(result);
  }
}
