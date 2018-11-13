import 'reflect-metadata';
import * as dotenv from "dotenv";
dotenv.config();

import { ApiServer } from './server';

const server = new ApiServer();

server.start(+process.env.PORT || 8080);
