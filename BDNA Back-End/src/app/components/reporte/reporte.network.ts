import express, { Router, Request, Response} from 'express';
import reporteController from "./reporte.controller";
import responseModule from '../../modules/response.module';
import { Reporte } from '../../models/reporte.model';

const router: Router = express.Router();
router.get("/all", async function(req: Request, res: Response){
    try {
        const Reportes: Reporte[] = await reporteController.getAllReportes();
        responseModule.success(req, res, Reportes);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){
    const reporte:Reporte = req.body;
    try {
        const Result: Reporte | null = await reporteController.addReporte(reporte);
        responseModule.success(req, res, Result,201);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }

});

export default router;