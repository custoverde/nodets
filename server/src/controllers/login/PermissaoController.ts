import { Controller } from "../controller";
import { HttpServer } from "../../server/HttpServer";
import { permissaoService } from "../../services/login/PermissaoService";
import { Request, Response } from "restify";

export class PermissaoController implements Controller{
  initialize(httpServer: HttpServer): void {
    httpServer.get('/login/permissoes', this.list.bind(this));
    httpServer.get('/login/permissao/:id', this.getById.bind(this));
    httpServer.post('/login/permissao', this.create.bind(this));
    httpServer.put('/login/permissao/:id', this.update.bind(this));
    httpServer.del('/login/permissao/:id', this.remove.bind(this));
  }

  private async list(req: Request, res: Response): Promise<void> {
    res.send(await permissaoService.list());
  }

  private async getById(req: Request, res: Response): Promise<void> {
    const permissao = await permissaoService.getById(req.params.id);
    res.send(permissao ? 200 : 404, permissao);
  }

  private async create(req: Request, res: Response): Promise<void> {
    res.send(await permissaoService.create(req.body));
  }

  private async update(req: Request, res: Response): Promise<void> {
    res.send(await permissaoService.update(req.body));
  }

  private async remove(req: Request, res: Response): Promise<void> {
    res.send(await permissaoService.delete(req.params.id));
  }
}
