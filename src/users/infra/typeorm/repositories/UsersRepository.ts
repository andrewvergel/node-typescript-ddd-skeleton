import { Repository } from 'typeorm';
import { User } from '../entities/User';
import IUsersRepository, { IUserCreated } from '../../../repositories/IUsersRepository';
import IRegisterUserDTO from 'users/dto/IRegisterUserDTO';
import IGetUserByIdDTO from 'users/dto/IGetUserByIdDTO';
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

  async getById(data: IGetUserByIdDTO): Promise<IUserCreated | null> {
    const user = this.ormUserRepository.findOneBy({
      id: Number(data.id)
    });
    return user;
  }
}
