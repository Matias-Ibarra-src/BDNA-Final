import express, { Router, Request, Response} from 'express';
import noticiaController from './noticia.controller'
import { Noticia } from '../../models/noticia.model';
import responseModule from '../../modules/response.module';


const router: Router = express.Router();

router.get("/all", async function(req: Request, res: Response){
    try {
        const Noticias: Noticia[] = await noticiaController.getAllNoticias();
        responseModule.success(req, res, Noticias);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.delete("/delete/:id",async function(req: Request, res: Response){
    const id : string = req.params['id'];
    
    try {
        let ok: any = await noticiaController.deleteNoticia(id);
        responseModule.success(req,res,ok);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.get('/:id', async function(req: Request, res: Response){
    const id : String = req.params['id'];
    
    try {
        let Noticias: Noticia | null = await noticiaController.getNoticiaById(id);
        responseModule.success(req, res, Noticias);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){
    const noticia: Noticia=req.body;
    try {
        const Result: Noticia | null = await noticiaController.addNoticia(noticia);
        responseModule.success(req, res, Result,201);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

export default router;