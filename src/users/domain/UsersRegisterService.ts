import AppError from '../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from 'users/repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

export interface IResponse {
  code: string;
  message: string;
  data: any[] | object;
}

@injectable()
export default class UsersRegisterService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: IRequest): Promise<IResponse> {
    const resultData = await this.usersRepository.register(data);

    if (!resultData) {
      throw new AppError({ message: 'Usuario no existe' });
    }

    if (resultData.id === 1) {
      throw new AppError({ message: 'Usuario ya existe', errorCode: 'A004', data: { name: 'Armando' } });
    }

    const result = { code: '001', message: 'OK esta aqui!!', data: resultData };
    return result;
  }
}
