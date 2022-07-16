import { Repository } from 'typeorm';
import { User } from '../entities/User';
import IUsersRepository, { IUserCreated } from '../../../repositories/IUsersRepository';
import IRegisterUserDTO from 'users/dto/IRegisterUserDTO';
import DatabaseSourceTypeOrm from '../../../../shared/infra/db/typeorm';

export default class UsersRepository implements IUsersRepository {
  private ormUserRepository: Repository<User>;

  constructor() {
    this.ormUserRepository = DatabaseSourceTypeOrm.connection.getRepository(User);
  }

  async register(data: IRegisterUserDTO): Promise<IUserCreated> {
    const user = this.ormUserRepository.create({
      username: data.username,
      password: data.password
    });
    const newUser = await this.ormUserRepository.save(user);
    return newUser;
  }
}
