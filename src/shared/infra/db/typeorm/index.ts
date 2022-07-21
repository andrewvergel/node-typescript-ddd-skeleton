import IDatasource from '../models/IDatasource';
import { DataSource, DataSourceOptions } from 'typeorm';
import DBConfig from './config/postgres';

const configDb = {
  ...DBConfig,
  entities: ['./src/**/infra/typeorm/entities/*.ts']
};
const config: DataSourceOptions = {
  type: 'postgres',
  ...configDb
};

export default class DatabaseSourceTypeOrm implements IDatasource {
  static connection: DataSource;

  async up(): Promise<any> {
    if (!DatabaseSourceTypeOrm.connection) {
      const datasource = new DataSource(config);
      DatabaseSourceTypeOrm.connection = await datasource.initialize().catch((e: any) => {
        console.log('Error:DatabaseSourceTypeOrm::', e.message);
        return e;
      });
    }
  }
}
