import { container } from 'tsyringe';
import JoiRequestValidator from './implementations/Joi/JoiRequestValidator';
import AjvRequestValidator from './implementations/Ajv/AjvRequestValidator';
import IRequestValidatorProvider from './models/IRequestValidatorProvider';

const providers = {
  joi: {
    implementation: JoiRequestValidator
  },
  ajv: {
    implementation: AjvRequestValidator
  }
};

container.registerSingleton<IRequestValidatorProvider>('RequestValidatorProvider', providers.ajv.implementation);
