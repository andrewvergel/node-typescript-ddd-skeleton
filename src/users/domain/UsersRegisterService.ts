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
    const result = { code: '001', message: 'OK esta aqui!!', data: resultData };
    return result;
  }
}
