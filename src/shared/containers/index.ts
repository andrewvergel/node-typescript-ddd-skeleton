import { container } from 'tsyringe';
import IUsersRepository from '../../users/repositories/IUsersRepository';
import UsersRepository from '../../users/infra/static/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
