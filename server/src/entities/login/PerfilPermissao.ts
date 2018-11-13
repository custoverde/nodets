import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({
  name: 'perfilpermissao',
  schema: 'login'
 })
export class PerfilPermissao {

  public init(idPerfil:number, idPermissao: number) :void {
    this.idPerfil = idPerfil;
    this.idPermissao = idPermissao;
  }

  @PrimaryColumn()
  public idPerfil: number;

  @PrimaryColumn()
  public idPermissao: number;

  @Column({ nullable: false, type: "simple-array"})
  public tipo: string[];
}
