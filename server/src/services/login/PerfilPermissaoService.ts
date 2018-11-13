import { PerfilPermissao } from '../../entities/login/PerfilPermissao';
import { Service } from '../Service';
import { Repository } from 'typeorm';
import { TORMArrayHelper } from '../../helper/TORMArrayHelper';

export class PerfilPermissaoService extends Service<PerfilPermissao> {
  public async getRepository(): Promise<Repository<PerfilPermissao>> {
    return (await super.getConnection()).getRepository(PerfilPermissao);
  }

  public async getById(perfilPermissao: PerfilPermissao): Promise<PerfilPermissao> {
    return (await this.getRepository()).findOne(
      {
        where: {
          "idPerfil": perfilPermissao.idPerfil,
          "idPermissao": perfilPermissao.idPermissao
        }
      }
    );
  }

  public async list(): Promise<PerfilPermissao[]> {
    return (await this.getRepository()).find();
  }

  public async listPermissoesDoPerfil(idPerfil: number): Promise<PerfilPermissao[]> {
    return (await this.getRepository()).find({
      where:{
        idPerfil: idPerfil
      }
    });
  }

  public async create(perfilPermissao: PerfilPermissao): Promise<PerfilPermissao> {
    perfilPermissao.tipo = TORMArrayHelper.AdapterStringArray(perfilPermissao.tipo);
    return (await this.getRepository()).save(perfilPermissao);
  }

  public async update(perfilPermissao: PerfilPermissao): Promise<PerfilPermissao> {
    perfilPermissao.tipo = TORMArrayHelper.AdapterStringArray(perfilPermissao.tipo);
    return (await this.getRepository()).save(perfilPermissao);
  }

  public async delete(perfilPermissao: PerfilPermissao): Promise<PerfilPermissao> {
    const entity = await this.getById(perfilPermissao);
    return (await this.getRepository()).remove(entity);
  }
}

export const perfilPermissaoService = new PerfilPermissaoService();
