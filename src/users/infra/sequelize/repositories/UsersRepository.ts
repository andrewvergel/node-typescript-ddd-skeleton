import IRegisterUserDto from 'users/dto/IRegisterUserDTO';
import IUsersRepository, { IUserCreated } from '../../../repositories/IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  async register(data: IRegisterUserDto): Promise<IUserCreated> {
    return { id: 1, ...data };
  }
}
