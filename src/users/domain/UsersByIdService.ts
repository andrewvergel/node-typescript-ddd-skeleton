import AppError from '../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from 'users/repositories/IUsersRepository';

interface IRequest {
  id: number | string;
}

export interface IResponse {
  code: string;
  message: string;
  data: any[] | object;
}

@injectable()
export default class UsersByIdService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: IRequest): Promise<IResponse> {
    const resultData = await this.usersRepository.getById(data);

    if (!resultData) {
      throw new AppError({ message: 'Usuario no existe' });
    }

    const result = { code: '001', message: 'Success', data: resultData };
    return result;
  }
}
