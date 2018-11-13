import { RequestHandler, Server } from 'restify';
import { HttpServer } from './HttpServer';
import * as restify from 'restify';
import { Controllers } from '../controllers';
// import { CustomerController } from '../controllers/CustomerController';

export class ApiServer implements HttpServer {
  private restify: Server;

  public get(url: string, requestHandler: RequestHandler): void {
    this.addRoute('get', url, requestHandler);
  }

  public post(url: string, requestHandler: RequestHandler): void {
    this.addRoute('post', url, requestHandler);
  }

  public put(url: string, requestHandler: RequestHandler): void {
    this.addRoute('put', url, requestHandler);
  }

  public del(url: string, requestHandler: RequestHandler): void {
    this.addRoute('del', url, requestHandler);
  }

  public opts(url: string, requestHandler: RequestHandler): void {
    this.addRoute('opts', url, requestHandler);
  }

  private addRoute(
    method: 'get' | 'post' | 'put' | 'del' | 'opts',
    url: string,
    requestHandler: RequestHandler
  ): void {
    this.restify[method](url, async (req, res, next) => {
      try {
        await requestHandler(req, res, next);
      } catch (e) {
        console.log(e);
        res.send(500, e);
      }
    });
    console.log(`Added route ${method.toUpperCase()}: ${url}`);
  }

  public start(port: number): void {
    this.restify = restify.createServer();
    this.restify.use(restify.plugins.bodyParser());
    this.restify.use(restify.plugins.queryParser());
    this.restify.use(restify.plugins.fullResponse())

    // this.restify.opts('/.*/', function (req,res,next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
    //   res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
    //   res.send(200);
    //   return next();
    // });

    Controllers.forEach(controller => controller.initialize(this));

    this.restify.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
