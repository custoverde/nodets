import { Controller } from "../controller";
import { HttpServer } from "../../server/HttpServer";
import { usuarioPerfilService } from "../../services/login/UsuarioPerfilService";
import { Request, Response } from "restify";
import { UsuarioPerfil } from "../../entities/login/UsuarioPerfil";

export class UsuarioPerfilController implements Controller{
  initialize(httpServer: HttpServer): void {
    httpServer.get('/login/usuariosPerfis', this.list.bind(this));
    httpServer.get('/login/usuarioPerfil/:idUsuario', this.listPerfisDoUsuario.bind(this));
    httpServer.get('/login/usuarioPerfil/:idUsuario/:idPerfil', this.getById.bind(this));
    httpServer.post('/login/usuarioPerfil', this.create.bind(this));
    httpServer.put('/login/usuarioPerfil', this.update.bind(this));
    httpServer.del('/login/usuarioPerfil/:idUsuario/:idPerfil', this.remove.bind(this));
  }

  private async list(req: Request, res: Response): Promise<void> {
    res.send(await usuarioPerfilService.list());
  }

  private async listPerfisDoUsuario(req: Request, res: Response): Promise<void> {
    res.send(await usuarioPerfilService.listPerfisDoUsuario(req.params.idUsuario));
  }

  private async getById(req: Request, res: Response): Promise<void> {
    const paramusuarioPerfil: UsuarioPerfil = new UsuarioPerfil();
    paramusuarioPerfil.init(req.params.idUsuario, req.params.idPerfil);

    const usuarioPerfil = await usuarioPerfilService.getById(paramusuarioPerfil);
    res.send(usuarioPerfil ? 200 : 404, usuarioPerfil);
  }

  private async create(req: Request, res: Response): Promise<void> {
    res.send(await usuarioPerfilService.create(req.body));
  }

  private async update(req: Request, res: Response): Promise<void> {
    res.send(await usuarioPerfilService.update(req.body));
  }

  private async remove(req: Request, res: Response): Promise<void> {
    res.send(await usuarioPerfilService.delete(req.params.id));
  }
}
