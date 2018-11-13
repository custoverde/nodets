import { Controller } from "../controller";
import { HttpServer } from "../../server/HttpServer";
import { perfilService } from "../../services/login/PerfilService";
import { Request, Response } from "restify";

export class PerfilController implements Controller{
  initialize(httpServer: HttpServer): void {
    httpServer.get('/login/perfis', this.list.bind(this));
    httpServer.get('/login/perfil/:id', this.getById.bind(this));
    httpServer.post('/login/perfil', this.create.bind(this));
    httpServer.put('/login/perfil/:id', this.update.bind(this));
    httpServer.del('/login/perfil/:id', this.remove.bind(this));
  }

  private async list(req: Request, res: Response): Promise<void> {
    res.send(await perfilService.list());
  }

  private async getById(req: Request, res: Response): Promise<void> {
    const Perfil = await perfilService.getById(req.params.id);
    res.send(Perfil ? 200 : 404, Perfil);
  }

  private async create(req: Request, res: Response): Promise<void> {
    res.send(await perfilService.create(req.body));
  }

  private async update(req: Request, res: Response): Promise<void> {
    res.send(await perfilService.update(req.body));
  }

  private async remove(req: Request, res: Response): Promise<void> {
    res.send(await perfilService.delete(req.params.id));
  }
}
