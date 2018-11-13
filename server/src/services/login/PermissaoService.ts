import { Permissao } from '../../entities/login/Permissao';
import { Service } from '../Service';
import { Repository } from 'typeorm';

export class PermissaoService extends Service<Permissao> {
  public async getRepository(): Promise<Repository<Permissao>> {
    return (await super.getConnection()).getRepository(Permissao);
  }

  public async getById(id: number): Promise<Permissao> {
    return (await this.getRepository()).findOne(id, { relations: ["permissaoPai"] });
  }

  public async list(): Promise<Permissao[]> {
    return (await this.getRepository()).find({ relations: ["permissaoPai"] });
  }

  public async create(permissao: Permissao): Promise<Permissao> {
    return (await this.getRepository()).save(permissao);
  }

  public async update(permissao: Permissao): Promise<Permissao> {
    const entity = await this.getById(permissao.idPermissao);
    entity.titulo = permissao.titulo;
    entity.descricao = permissao.descricao;
    entity.ativa = permissao.ativa;
    if (permissao.aplicacao) {
      entity.aplicacao = permissao.aplicacao;
    }
    if (permissao.aplicacao) {
      entity.aplicacao = permissao.aplicacao;
    }
    return (await this.getRepository()).save(entity);
  }

  public async delete(id: number): Promise<Permissao> {
    const entity = await this.getById(id);
    return (await this.getRepository()).remove(entity);
  }
}

export const permissaoService = new PermissaoService();
