import { Controller } from "../controller";
import { HttpServer } from "../../server/HttpServer";
import { usuarioPermissaoService } from "../../services/login/UsuarioPermissaoService";
import { Request, Response } from "restify";
import { UsuarioPermissao } from "../../entities/login/UsuarioPermissao";

export class UsuarioPermissaoController implements Controller{
  initialize(httpServer: HttpServer): void {
    httpServer.get('/login/usuariosPermissoes', this.list.bind(this));
    httpServer.get('/login/usuarioPermissao/:idUsuario', this.listPermissoesDoUsuario.bind(this));
    httpServer.get('/login/usuarioPermissao/:idUsuario/:idPermissao', this.getById.bind(this));
    httpServer.post('/login/usuarioPermissao', this.create.bind(this));
    httpServer.put('/login/usuarioPermissao', this.update.bind(this));
    httpServer.del('/login/usuarioPermissao/:idUsuario/:idPermissao', this.remove.bind(this));
  }

  private async list(req: Request, res: Response): Promise<void> {
    res.send(await usuarioPermissaoService.list());
  }

  private async listPermissoesDoUsuario(req: Request, res: Response): Promise<void> {
    res.send(await usuarioPermissaoService.listPermissoesDoUsuario(req.params.idUsuario));
  }

  private async getById(req: Request, res: Response): Promise<void> {
    const paramUsuarioPermissao: UsuarioPermissao = new UsuarioPermissao();
    paramUsuarioPermissao.init(req.params.idUsuario, req.params.idPermissao);

    const usuarioPermissao = await usuarioPermissaoService.getById(paramUsuarioPermissao);
    res.send(UsuarioPermissao ? 200 : 404, usuarioPermissao);
  }

  private async create(req: Request, res: Response): Promise<void> {
    res.send(await usuarioPermissaoService.create(req.body));
  }

  private async update(req: Request, res: Response): Promise<void> {
    res.send(await usuarioPermissaoService.update(req.body));
  }

  private async remove(req: Request, res: Response): Promise<void> {
    const paramUsuarioPermissao: UsuarioPermissao = new UsuarioPermissao();
    paramUsuarioPermissao.init(req.params.idUsuario, req.params.idPermissao);
    res.send(await usuarioPermissaoService.delete(paramUsuarioPermissao));
  }
}
