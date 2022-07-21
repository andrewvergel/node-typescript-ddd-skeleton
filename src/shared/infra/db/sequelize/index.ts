import IDatasource from '../models/IDatasource';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { User } from '../../../../users/infra/sequelize/entities/User';
import DBConfig from './config/postgresql';

/* Models */
const dbModels = [User];

export default class DatabaseSourceSequelize implements IDatasource {
  static connection: Sequelize;

  async up(): Promise<any> {
    if (!DatabaseSourceSequelize.connection) {
      try {
        const configDatabase = { ...DBConfig } as SequelizeOptions;
        DatabaseSourceSequelize.connection = new Sequelize({
          ...configDatabase,
          models: dbModels
        });
        return await DatabaseSourceSequelize.connection.authenticate();
      } catch (error) {
        console.log('error::', error);
      }
    }
  }
}
