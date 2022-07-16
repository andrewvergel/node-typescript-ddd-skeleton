import IDatasource from '../models/IDatasource';
import { DataSource, DataSourceOptions } from 'typeorm';
const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'toor',
  database: 'db_clean',
  entities: ['./src/**/infra/typeorm/entities/*.ts']
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
