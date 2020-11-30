import express, { Express } from 'express';
import router from './video.network';

const video: Express = express();
video.use('/video', router);

export default video;