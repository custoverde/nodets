import { HttpServer } from '../server/HttpServer';
import { Controller } from './Controller';
export class PingController implements Controller {
  public initialize(httpServer: HttpServer): void {
    httpServer.get('/ping', (req, res) => res.send(200, 'hello world'));
  }
}
