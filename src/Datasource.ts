import DatabaseSource from 'shared/infra/db/typeorm';

export default class DataSource {
  async start(): Promise<any> {
    return new DatabaseSource().up();
  }
}
