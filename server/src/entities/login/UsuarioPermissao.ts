import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({
  name: 'usuariopermissao',
  schema: 'login'
 })
export class UsuarioPermissao {

  public init(idUsuario:number, idPermissao: number) :void {
    this.idUsuario = idUsuario;
    this.idPermissao = idPermissao;
  }

  @PrimaryColumn()
  public idUsuario: number;

  @PrimaryColumn()
  public idPermissao: number;

  @Column({ nullable: false, type: "simple-array"})
  public tipo: string[];
}
