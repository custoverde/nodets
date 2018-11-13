import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Aplicacao } from './Aplicacao';

@Entity({
  name: 'perfis',
  schema: 'login' 
 })
export class Perfil {
  @PrimaryGeneratedColumn()
  public idPerfil: number;

  @ManyToOne(type => Aplicacao, aplicacao => aplicacao.perfis)
  @JoinColumn({name: "idAplicacao"})
  public aplicacao: Aplicacao;

  @Column()
  public titulo: string;

  @Column()
  public descricao: string;
}
