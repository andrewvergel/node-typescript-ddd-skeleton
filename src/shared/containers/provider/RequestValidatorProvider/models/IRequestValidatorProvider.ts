// import IValidateRequestDTO from '../dtos/IValidateRequestDTO';

export interface IRequestValidate {
  body?: object;
  params?: object;
  query?: object;
  headers?: object;
  cookies?: object;
  signedCookies?: object;
}

export default interface IRequestValidatorProvider {
  validate(request: IRequestValidate, callback: (error?: any) => void): void;
}
