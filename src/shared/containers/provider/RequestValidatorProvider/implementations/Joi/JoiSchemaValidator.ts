import Joi from 'joi';
import ISchemaValidator, { IRegister } from '../../models/ISchemaValidator';

export default class JoiSchemaValidator implements ISchemaValidator {
  register(): Joi.ObjectSchema<IRegister> {
    return Joi.object().keys({
      username: Joi.string().required()
    });
  }
}
