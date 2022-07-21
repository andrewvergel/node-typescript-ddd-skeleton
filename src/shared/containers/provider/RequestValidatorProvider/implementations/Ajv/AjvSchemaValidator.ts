import { JSONSchemaType } from 'ajv';

interface IRegisterData {
  username: string;
  password: string;
}

interface IGetByIdData {
  id: string;
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

  getById(): JSONSchemaType<IGetByIdData> {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' }
      },
      required: ['id'],
      additionalProperties: false
    };
  }
}
