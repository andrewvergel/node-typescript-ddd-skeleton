import IDatasource from '../models/IDatasource';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../../../../users/infra/sequelize/entities/User';
const dbName = 'db_clean';
const dbUser = 'postgres';
const dbHost = 'localhost';
const dbDriver = 'postgres';
const dbPassword = 'toor';
const dbModels = [User];

export default class DatabaseSourceSequelize implements IDatasource {
  static connection: Sequelize;

  async up(): Promise<any> {
    if (!DatabaseSourceSequelize.connection) {
      try {
        DatabaseSourceSequelize.connection = new Sequelize({
          database: dbName,
          username: dbUser,
          password: dbPassword,
          host: dbHost,
          dialect: dbDriver,
          models: dbModels
        });
        return await DatabaseSourceSequelize.connection.authenticate();
      } catch (error) {
        console.log('error::', error);
      }
    }
  }
}
