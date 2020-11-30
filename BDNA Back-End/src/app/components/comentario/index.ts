import express, { Express } from 'express';
import router from './comentario.network';

const comentario: Express = express();
comentario.use('/comentario', router);

export default comentario;