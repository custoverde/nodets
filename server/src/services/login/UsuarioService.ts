import { Usuario } from '../../entities/login/Usuario';
import { Service } from '../Service';
import { Repository } from 'typeorm';

export class UsuarioService extends Service<Usuario> {
  public async getRepository(): Promise<Repository<Usuario>> {
    return (await super.getConnection()).getRepository(Usuario);
  }

  public async getById(id: number): Promise<Usuario> {
    return (await this.getRepository()).findOne(id, { relations: ["licenca"] });
  }

  public async list(): Promise<Usuario[]> {
    return (await this.getRepository()).find({ relations: ["licenca"] });
  }

  public async create(usuario: Usuario): Promise<Usuario> {
    return (await this.getRepository()).save(usuario);
  }

  public async update(usuario: Usuario): Promise<Usuario> {
    const entity = await this.getById(usuario.idUsuario);
    if (usuario.licenca) {
      entity.licenca = usuario.licenca;
    }
    entity.nome = usuario.nome;
    entity.departamento = usuario.departamento;
    entity.email = usuario.email;
    entity.nomeAcesso = usuario.nomeAcesso;
    entity.senha = usuario.senha;
    entity.dataExpiraSenha = usuario.dataExpiraSenha;
    entity.dataCadastro = usuario.dataCadastro;
    entity.ativo = usuario.ativo;
    entity.forcaSenha = usuario.forcaSenha;
    entity.tipoUsuario = usuario.tipoUsuario;
    entity.dataNascimento = usuario.dataNascimento;
    return (await this.getRepository()).save(entity);
  }

  public async delete(id: number): Promise<Usuario> {
    const entity = await this.getById(id);
    return (await this.getRepository()).remove(entity);
  }
}

export const usuarioService = new UsuarioService();
