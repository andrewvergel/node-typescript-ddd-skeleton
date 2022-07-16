import IRegisterUserDTO from '../dto/IRegisterUserDTO';

export interface IUserCreated {
  id: number;
  username: string;
  password: string;
}
export default interface IUsersRepository {
  register(data: IRegisterUserDTO): Promise<IUserCreated>;
}
