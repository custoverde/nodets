import { UsuarioPerfil } from '../../entities/login/UsuarioPerfil';
import { Service } from '../Service';
import { Repository } from 'typeorm';

export class UsuarioPerfilService extends Service<UsuarioPerfil> {
  public async getRepository(): Promise<Repository<UsuarioPerfil>> {
    return (await super.getConnection()).getRepository(UsuarioPerfil);
  }

  public async getById(UsuarioPerfil: UsuarioPerfil): Promise<UsuarioPerfil> {
    return (await this.getRepository()).findOne(
      {
        where: {
          "idUsuario": UsuarioPerfil.idUsuario,
          "idPerfil": UsuarioPerfil.idPerfil
        }
      }
    );
  }

  public async list(): Promise<UsuarioPerfil[]> {
    return (await this.getRepository()).find();
  }

  public async listPerfisDoUsuario(idUsuario: number): Promise<UsuarioPerfil[]> {
    return (await this.getRepository()).find({
      where:{
        idUsuario: idUsuario
      }
    });
  }

  public async create(usuarioPerfil: UsuarioPerfil): Promise<UsuarioPerfil> {
    return (await this.getRepository()).save(usuarioPerfil);
  }

  public async update(usuarioPerfil: UsuarioPerfil): Promise<UsuarioPerfil> {
    return (await this.getRepository()).save(usuarioPerfil);
  }

  public async delete(usuarioPerfil: UsuarioPerfil): Promise<UsuarioPerfil> {
    const entity = await this.getById(usuarioPerfil);
    return (await this.getRepository()).remove(entity);
  }
}

export const usuarioPerfilService = new UsuarioPerfilService();
