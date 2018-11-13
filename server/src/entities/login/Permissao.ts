import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Aplicacao } from './Aplicacao';

@Entity({
  name: 'permissoes',
  schema: 'login'
})
export class Permissao {
  @PrimaryGeneratedColumn()
  public idPermissao: number;

  @ManyToOne(type => Aplicacao, aplicacao => aplicacao.perfis)
  @JoinColumn({ name: 'idAplicacao' })
  public aplicacao: Aplicacao;

  @ManyToOne(type => Permissao)
  @JoinColumn({ name: 'idPermissaoPai' })
  public permissaoPai: Permissao;

  @Column({ nullable: false })
  public titulo: string;

  @Column()
  public descricao: string;

  @Column({ default: true })
  public ativa: boolean;
}
