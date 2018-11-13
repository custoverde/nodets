import { Controller } from "../controller";
import { HttpServer } from "../../server/HttpServer";
import { aplicacaoService } from "../../services/login/AplicacaoService";
import { Request, Response } from "restify";

export class AplicacaoController implements Controller{
  initialize(httpServer: HttpServer): void {
    httpServer.get('/login/aplicacoes', this.list.bind(this));
    httpServer.get('/login/aplicacao/:id', this.getById.bind(this));
    httpServer.post('/login/aplicacao', this.create.bind(this));
    httpServer.put('/login/aplicacao/:id', this.update.bind(this));
    httpServer.del('/login/aplicacao/:id', this.remove.bind(this));
  }

  private async list(req: Request, res: Response): Promise<void> {
    res.send(await aplicacaoService.list());
  }

  private async getById(req: Request, res: Response): Promise<void> {
    const aplicacao = await aplicacaoService.getById(req.params.id);
    res.send(aplicacao ? 200 : 404, aplicacao);
  }

  private async create(req: Request, res: Response): Promise<void> {
    res.send(await aplicacaoService.create(req.body));
  }

  private async update(req: Request, res: Response): Promise<void> {
    res.send(await aplicacaoService.update(req.body));
  }

  private async remove(req: Request, res: Response): Promise<void> {
    res.send(await aplicacaoService.delete(req.params.id));
  }
}
