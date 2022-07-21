import Joi from 'joi';

export default class JoiSchemaValidator {
  register() {
    return {
      username: Joi.string().required(),
      password: Joi.string().required()
    };
  }

  getById() {
    return {
      id: Joi.string().required()
    };
  }
}
