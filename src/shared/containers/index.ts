import { container } from 'tsyringe';
import IUsersRepository from '../../users/repositories/IUsersRepository';
import UsersRepository from '../../users/infra/redis-om/repositories/UsersRepository';
import './provider';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
