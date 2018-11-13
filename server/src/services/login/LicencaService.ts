import { Licenca } from '../../entities/login/Licenca';
import { Service } from '../Service';
import { Repository } from 'typeorm';

export class LicencaService extends Service<Licenca> {
  public async getRepository(): Promise<Repository<Licenca>> {
    return (await super.getConnection()).getRepository(Licenca);
  }

  public async getById(id: number): Promise<Licenca> {
    return (await this.getRepository()).findOne(id);
  }

  public async list(): Promise<Licenca[]> {
    return (await this.getRepository()).find();
  }

  public async create(licenca: Licenca): Promise<Licenca> {
    return (await this.getRepository()).save(licenca);
  }

  public async update(licenca: Licenca): Promise<Licenca> {
    const entity =  await this.getById(licenca.idLicenca);
    entity.cnpjCpf = licenca.cnpjCpf;
    entity.dataCadastro = licenca.dataCadastro;
    entity.validoAte = licenca.validoAte;
    return (await this.getRepository()).save(entity);
  }

  public async delete(id: number): Promise<Licenca> {
    const entity = await this.getById(id);
    return (await this.getRepository()).remove(entity);
  }
}

export const licencaService = new LicencaService();
