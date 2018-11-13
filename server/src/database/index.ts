import { Connection, createConnection } from 'typeorm';

export class DatabaseProvider {
  private static connection: Connection;

  public static async getConnection(): Promise<Connection> {
    if (DatabaseProvider.connection) {
      return DatabaseProvider.connection;
    }
    DatabaseProvider.connection = await createConnection(process.env.ENVIROMENT || "default");
    return DatabaseProvider.connection;
  }
}
