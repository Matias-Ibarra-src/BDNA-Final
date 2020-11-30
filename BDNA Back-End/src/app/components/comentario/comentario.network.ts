import express, { Router, Request, Response} from 'express';
import responseModule from '../../modules/response.module';
import { Comentario } from '../../models/comentario.model';
import comentarioController from './comentario.controller';

const router: Router = express.Router();

router.get("/all", async function(req: Request, res: Response){
    try {
        const comentados: Comentario[] = await comentarioController.getAllComentarios();
        responseModule.success(req, res, comentados);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.get('/:id', async function(req: Request, res: Response){
    const id : String = req.params['id'];
    
    try {
        let comentado: Comentario | null = await comentarioController.getComentarioById(id);
        responseModule.success(req, res, comentado);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){
    const comentado: Comentario=req.body;
    try {
        const Result: Comentario | null = await comentarioController.addComentario(comentado);
        responseModule.success(req, res, Result,201);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.delete("/delete/:id",async function(req: Request, res: Response){
    const id : string = req.params['id'];
    
    try {
        let ok: any = await comentarioController.deleteComentario(id);
        responseModule.success(req,res,ok);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

export default router;