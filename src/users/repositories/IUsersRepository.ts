import IRegisterUserDTO from '../dto/IRegisterUserDTO';

export interface IUserCreated {
  id: number;
  email: string;
  password: string;
}
export default interface IUsersRepository {
  register(data: IRegisterUserDTO): Promise<IUserCreated>;
}
