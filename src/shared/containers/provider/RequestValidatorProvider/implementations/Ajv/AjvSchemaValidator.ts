import { JSONSchemaType } from 'ajv';

interface IRegisterData {
  username: string;
  password: string;
}

export default class AjvSchemaValidator {
  register(): JSONSchemaType<IRegisterData> {
    return {
      type: 'object',
      properties: {
        username: { type: 'string' },
        password: { type: 'string' }
      },
      required: ['username', 'password'],
      additionalProperties: false
    };
  }
}
