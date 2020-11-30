import express, { Express } from 'express';
import router from './noticia.network';

const noticia: Express = express();
noticia.use('/noticia', router);

export default noticia;