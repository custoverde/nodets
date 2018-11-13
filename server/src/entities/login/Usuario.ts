 import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Licenca } from './Licenca';

@Entity({
  name: 'usuarios',
  schema: 'login'
})
export class Usuario {
  @ManyToOne(type => Licenca)
  @JoinColumn({ name: 'idLicenca' })
  public licenca: Licenca;

  @PrimaryGeneratedColumn()
  public idUsuario: number;

  @Column({ nullable: false })
  public nome: string;

  @Column({ nullable: false })
  public departamento: string;

  @Column({ nullable: false })
  public email: string;

  @Column({ nullable: false })
  public nomeAcesso: string;

  @Column({ nullable: false })
  public senha: string;

  @Column({ nullable: false })
  public dataExpiraSenha: Date;

  @Column({ nullable: false })
  public dataCadastro: Date;

  @Column({ nullable: false })
  public ativo: boolean;

  @Column()
  public forcaSenha: string;

  @Column()
  public tipoUsuario: string;

  @Column({ nullable: false })
  public dataNascimento: Date;
}

