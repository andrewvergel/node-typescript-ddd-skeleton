import IDatasource from '../models/IDatasource';
import { Client } from 'redis-om';
import DBConfig from './config/redis';

export default class DatabaseSourceRedisOm implements IDatasource {
  static connection: Client;

  async up(): Promise<any> {
    if (!DatabaseSourceRedisOm.connection) {
      try {
        DatabaseSourceRedisOm.connection = new Client();
        const { host, port, username, password } = DBConfig;
        return await DatabaseSourceRedisOm.connection.open(`redis://${username}:${password}@${host}:${port}`);
      } catch (error) {
        console.log('error::', error);
      }
    }
  }
}
