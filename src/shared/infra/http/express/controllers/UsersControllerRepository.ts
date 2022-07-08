import { Request, Response } from 'express';
import { IUsersControllerRepository } from './IUsersControllerRepository';
import UsersRegisterService from '../../../../../users/domain/UsersRegisterService';
import { container } from 'tsyringe';

export default class UserControllerRepository implements IUsersControllerRepository {
  async register(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const { email, password } = body;
    const userRegisterService = container.resolve(UsersRegisterService);
    const result = await userRegisterService.execute({ email, password });
    return res.json(result);
  }
}
