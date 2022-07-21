import { User, UserSchema } from '../entities/User';
import { Repository } from 'redis-om';
import DatabaseSourceRedisOm from '../../../../shared/infra/db/redis-om';
import IUsersRepository, { IUserCreated } from '../../../repositories/IUsersRepository';
import IRegisterUserDTO from 'users/dto/IRegisterUserDTO';
import IGetUserByIdDTO from 'users/dto/IGetUserByIdDTO';

export default class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User> = DatabaseSourceRedisOm.connection.fetchRepository(UserSchema);

  async register(data: IRegisterUserDTO): Promise<IUserCreated> {
    const newUserId = await this.usersRepository.createAndSave({
      username: data.username,
      password: data.password
    });
    const newUser = { id: newUserId.entityId, ...data };
    return newUser;
  }

  async getById(data: IGetUserByIdDTO): Promise<IUserCreated | null> {
    const userResult = await this.usersRepository.fetch(String(data.id));
    const user = {
      id: userResult.entityId,
      username: userResult.toJSON().username,
      password: userResult.toJSON().password
    };
    return user;
  }
}
