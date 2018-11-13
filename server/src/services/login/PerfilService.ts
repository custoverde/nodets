import { Perfil } from '../../entities/login/Perfil';
import { Service } from '../Service';
import { Repository } from 'typeorm';

export class PerfilService extends Service<Perfil> {
  public async getRepository(): Promise<Repository<Perfil>> {
    return (await super.getConnection()).getRepository(Perfil);
  }

  public async getById(id: number): Promise<Perfil> {
    return (await this.getRepository()).findOne(id, { relations: ["aplicacao"] });
  }

  public async list(): Promise<Perfil[]> {
    return (await this.getRepository()).find({ relations: ["aplicacao"] });
  }

  public async create(perfil: Perfil): Promise<Perfil> {
    return (await this.getRepository()).save(perfil);
  }

  public async update(perfil: Perfil): Promise<Perfil> {
    const entity = await this.getById(perfil.idPerfil);
    entity.titulo = perfil.titulo;
    entity.descricao = perfil.descricao;
    if (perfil.aplicacao) {
      entity.aplicacao = perfil.aplicacao;
    }
    return (await this.getRepository()).save(entity);
  }

  public async delete(id: number): Promise<Perfil> {
    const entity = await this.getById(id);
    return (await this.getRepository()).remove(entity);
  }
}

export const perfilService = new PerfilService();
