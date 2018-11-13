import { Controller } from "../controller";
import { HttpServer } from "../../server/HttpServer";
import { perfilPermissaoService } from "../../services/login/PerfilPermissaoService";
import { Request, Response } from "restify";
import { PerfilPermissao } from "../../entities/login/PerfilPermissao";

export class PerfilPermissaoController implements Controller{
  initialize(httpServer: HttpServer): void {
    httpServer.get('/login/perfisPermissoes', this.list.bind(this));
    httpServer.get('/login/perfilPermissao/:idPerfil', this.listPermissoesDoPerfil.bind(this));
    httpServer.get('/login/perfilPermissao/:idPerfil/:idPermissao', this.getById.bind(this));
    httpServer.post('/login/perfilPermissao', this.create.bind(this));
    httpServer.put('/login/perfilPermissao', this.update.bind(this));
    httpServer.del('/login/perfilPermissao/:idPerfil/:idPermissao', this.remove.bind(this));
  }

  private async list(req: Request, res: Response): Promise<void> {
    res.send(await perfilPermissaoService.list());
  }

  private async listPermissoesDoPerfil(req: Request, res: Response): Promise<void> {
    res.send(await perfilPermissaoService.listPermissoesDoPerfil(req.params.idPerfil));
  }

  private async getById(req: Request, res: Response): Promise<void> {
    const paramPerfilPermissao: PerfilPermissao = new PerfilPermissao();
    paramPerfilPermissao.init(req.params.idPerfil, req.params.idPermissao);

    const perfilPermissao = await perfilPermissaoService.getById(paramPerfilPermissao);
    res.send(perfilPermissao ? 200 : 404, perfilPermissao);
  }

  private async create(req: Request, res: Response): Promise<void> {
    res.send(await perfilPermissaoService.create(req.body));
  }

  private async update(req: Request, res: Response): Promise<void> {
    res.send(await perfilPermissaoService.update(req.body));
  }

  private async remove(req: Request, res: Response): Promise<void> {
    const paramPerfilPermissao: PerfilPermissao = new PerfilPermissao();
    paramPerfilPermissao.init(req.params.idPerfil, req.params.idPermissao);

    res.send(await perfilPermissaoService.delete(paramPerfilPermissao));
  }
}
