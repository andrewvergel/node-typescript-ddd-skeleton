export interface IRequestValidate {
  body?: object;
  params?: object;
  query?: object;
  headers?: object;
  cookies?: object;
  signedCookies?: object;
}

export default interface IRequestValidatorProvider {
  validateRegister(request: IRequestValidate): Promise<any>;
}
