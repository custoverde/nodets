import { Connection, Repository, EntitySchema } from "typeorm";
import { DatabaseProvider } from "../database";

export abstract class Service<T> {

  async getConnection(): Promise<Connection> {
    const connection = await DatabaseProvider.getConnection();
    return connection;
  }

  async abstract getRepository(): Promise<Repository<T>>;

  async abstract getById(id: any): Promise<T>;
  async abstract list(): Promise<T[]>
  async abstract create(t: T):Promise<T>;
  async abstract update(t: T): Promise<T>;
  async abstract delete(id: any): Promise<T>
}