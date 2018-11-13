import { UsuarioPermissao } from '../../entities/login/UsuarioPermissao';
import { Service } from '../Service';
import { Repository } from 'typeorm';
import { TORMArrayHelper } from '../../helper/TORMArrayHelper';

export class UsuarioPermissaoService extends Service<UsuarioPermissao> {
  public async getRepository(): Promise<Repository<UsuarioPermissao>> {
    return (await super.getConnection()).getRepository(UsuarioPermissao);
  }

  public async getById(usuarioPermissao: UsuarioPermissao): Promise<UsuarioPermissao> {
    return (await this.getRepository()).findOne(
      {
        where: {
          "idUsuario": usuarioPermissao.idUsuario,
          "idPermissao": usuarioPermissao.idPermissao
        }
      }
    );
  }

  public async list(): Promise<UsuarioPermissao[]> {
    return (await this.getRepository()).find();
  }

  public async listPermissoesDoUsuario(idUsuario: number): Promise<UsuarioPermissao[]> {
    return (await this.getRepository()).find({
      where:{
        idUsuario: idUsuario
      }
    });
  }

  public async create(UsuarioPermissao: UsuarioPermissao): Promise<UsuarioPermissao> {
    UsuarioPermissao.tipo = TORMArrayHelper.AdapterStringArray(UsuarioPermissao.tipo);
    return (await this.getRepository()).save(UsuarioPermissao);
  }

  public async update(UsuarioPermissao: UsuarioPermissao): Promise<UsuarioPermissao> {
    UsuarioPermissao.tipo = TORMArrayHelper.AdapterStringArray(UsuarioPermissao.tipo);
    return (await this.getRepository()).save(UsuarioPermissao);
  }

  public async delete(usuarioPermissao: UsuarioPermissao): Promise<UsuarioPermissao> {
    const entity = await this.getById(usuarioPermissao);
    return (await this.getRepository()).remove(entity);
  }
}

export const usuarioPermissaoService = new UsuarioPermissaoService();
