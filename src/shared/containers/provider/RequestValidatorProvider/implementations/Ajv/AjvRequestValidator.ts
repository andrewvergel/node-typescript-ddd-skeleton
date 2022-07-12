import Ajv from 'ajv';
import IRequestValidatorProvider, { IRequestValidate } from '../../models/IRequestValidatorProvider';
import AjvSchemaValidator from './AjvSchemaValidator';

export default class JoiRequestValidator implements IRequestValidatorProvider {
  ajv = new Ajv();

  async validateRegister(data: IRequestValidate): Promise<any> {
    const ajvSchemaValidator = new AjvSchemaValidator();
    return this._validate(data, ajvSchemaValidator.register);
  }

  private async _validate(data: IRequestValidate, schemaValidation: () => object): Promise<any> {
    const scheme = schemaValidation();
    const valid = this.ajv.validate(scheme, data.body);
    if (!valid) {
      console.log(this.ajv.errors);
      throw new Error('Invalid params');
    }
    return true;
  }
}
