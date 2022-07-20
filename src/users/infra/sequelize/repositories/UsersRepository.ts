import { User } from '../entities/User';
import IUsersRepository, { IUserCreated } from '../../../repositories/IUsersRepository';
import IRegisterUserDTO from 'users/dto/IRegisterUserDTO';

export default class UsersRepository implements IUsersRepository {
  async register(data: IRegisterUserDTO): Promise<IUserCreated> {
    const newUser = await User.create({
      username: data.username,
      password: data.password
    });
    return newUser;
  }
}
