import { Controller } from "../controller";
import { HttpServer } from "../../server/HttpServer";
import { usuarioService } from "../../services/login/UsuarioService";
import { Request, Response } from "restify";

export class UsuarioController implements Controller{
  initialize(httpServer: HttpServer): void {
    httpServer.get('/login/usuarios', this.list.bind(this));
    httpServer.get('/login/usuario/:id', this.getById.bind(this));
    httpServer.post('/login/usuario', this.create.bind(this));
    httpServer.put('/login/usuario/:id', this.update.bind(this));
    httpServer.del('/login/usuario/:id', this.remove.bind(this));
  }

  private async list(req: Request, res: Response): Promise<void> {
    res.send(await usuarioService.list());
  }

  private async getById(req: Request, res: Response): Promise<void> {
    const Usuario = await usuarioService.getById(req.params.id);
    res.send(Usuario ? 200 : 404, Usuario);
  }

  private async create(req: Request, res: Response): Promise<void> {
    res.send(await usuarioService.create(req.body));
  }

  private async update(req: Request, res: Response): Promise<void> {
    res.send(await usuarioService.update(req.body));
  }

  private async remove(req: Request, res: Response): Promise<void> {
    res.send(await usuarioService.delete(req.params.id));
  }
}
