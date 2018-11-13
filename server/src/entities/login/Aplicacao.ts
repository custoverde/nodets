import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Perfil } from './Perfil';

@Entity({
  name: 'aplicacoes',
  schema: 'login'
})
export class Aplicacao {
  @PrimaryGeneratedColumn()
  public idAplicacao: number;

  @Column()
  public nome: string;

  @Column()
  public chaveAutorizacao: string;

  @OneToMany(type => Perfil, perfil => perfil.aplicacao)
  perfis: Perfil[];
}
