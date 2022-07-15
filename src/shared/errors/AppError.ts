interface IAppErrorDTO {
  message: string;
  errorCode?: string;
  statusCode?: number;
  data?: any;
}

class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly errorCode: string;

  public readonly data: any;

  constructor({ message, errorCode = '', statusCode = 400, data = [] }: IAppErrorDTO) {
    this.errorCode = errorCode;
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}

export default AppError;
