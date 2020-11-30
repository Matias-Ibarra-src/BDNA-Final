import express, { Express } from 'express';
import router from './reporte.network';

const reporte: Express = express();
reporte.use('/reporte', router);

export default reporte;