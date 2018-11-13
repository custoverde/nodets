import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({
  name: 'usuarioperfil',
  schema: 'login'
 })
export class UsuarioPerfil {

  public init(idPerfil:number, idUsuario: number) :void {
    this.idUsuario = idUsuario;
    this.idPerfil = idPerfil;
  }

  @PrimaryColumn()
  public idUsuario: number;

  @PrimaryColumn()
  public idPerfil: number;
}
