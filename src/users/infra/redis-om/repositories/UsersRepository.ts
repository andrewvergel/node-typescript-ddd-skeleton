import { User, UserSchema } from '../entities/User';
import { Repository } from 'redis-om';
import DatabaseSourceRedisOm from '../../../../shared/infra/db/redis-om';
import IUsersRepository, { IUserCreated } from '../../../repositories/IUsersRepository';
import IRegisterUserDTO from 'users/dto/IRegisterUserDTO';

export default class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = DatabaseSourceRedisOm.connection.fetchRepository(UserSchema);
  }

  async register(data: IRegisterUserDTO): Promise<IUserCreated> {
    const newUserId = await this.usersRepository.createAndSave({
      username: data.username,
      password: data.password
    });
    const newUser = { id: newUserId.entityId, ...data };
    return newUser;
  }
}
