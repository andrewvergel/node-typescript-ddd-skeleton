import joi from 'joi';
import IRequestValidatorProvider, { IRequestValidate } from '../../models/IRequestValidatorProvider';

export default class JoiRequestValidator implements IRequestValidatorProvider {
  async validate(data: IRequestValidate, callback: (error?: any) => void): Promise<any> {
    const schema = joi.object().keys({
      username: joi.string().required(),
      password: joi.string().required()
    });

    try {
      await schema.validateAsync(data.body);
      callback();
    } catch (error) {
      callback(error);
    }
  }
}
