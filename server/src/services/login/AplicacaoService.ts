import { Aplicacao } from "../../entities/login/Aplicacao";
import { Service } from "../Service";
import { Repository } from "typeorm";

export class AplicacaoService extends Service<Aplicacao> {

  public async getRepository(): Promise<Repository<Aplicacao>>{
    return (await super.getConnection()).getRepository(Aplicacao);
  }
  
  public async getById(id: number): Promise<Aplicacao> {
    return (await this.getRepository()).findOne(id);
  }

  public async list(): Promise<Aplicacao[]>{
    return (await this.getRepository()).find();
  }
  
  public async create(aplicacao: Aplicacao): Promise<Aplicacao> {
    return (await this.getRepository()).save(aplicacao);
  }
  
  public async update(aplicacao: Aplicacao): Promise<Aplicacao> {
    const entity =  await this.getById(aplicacao.idAplicacao);
    entity.nome = aplicacao.nome;
    entity.chaveAutorizacao = aplicacao.chaveAutorizacao;
    return (await this.getRepository()).save(entity);
  }
  
  public async delete(id: number): Promise<Aplicacao> {
    const entity =  await this.getById(id);
    return (await this.getRepository()).remove(entity);
  }
}

export const aplicacaoService = new AplicacaoService();