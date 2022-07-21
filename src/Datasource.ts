import DatabaseSource from 'shared/infra/db/redis-om';

export default class DataSource {
  async start(): Promise<any> {
    return new DatabaseSource().up();
  }
}
