import Ajv from 'ajv';
import AppError from 'shared/errors/AppError';
import IRequestValidatorProvider, { IRequestValidate } from '../../models/IRequestValidatorProvider';
import AjvSchemaValidator from './AjvSchemaValidator';

export default class AjvRequestValidator implements IRequestValidatorProvider {
  ajv = new Ajv();

  async validateRegister(data: IRequestValidate): Promise<any> {
    const ajvSchemaValidator = new AjvSchemaValidator();
    return this._validate(data, ajvSchemaValidator.register);
  }

  private async _validate(data: IRequestValidate, schemaValidation: () => object): Promise<any> {
    const scheme = schemaValidation();
    const valid = this.ajv.validate(scheme, data.body);
    if (!valid) {
      console.log('ajv', this.ajv.errors);
      throw new AppError({ message: 'Invalid params', errorCode: 'A001', data: this.ajv.errors, statusCode: 403 });
    }
    return true;
  }
}
