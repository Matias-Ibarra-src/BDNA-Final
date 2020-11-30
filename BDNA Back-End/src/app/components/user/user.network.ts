import express, { Router, Request, Response} from 'express';
import { User } from '../../models/user.model';
import responseModule from '../../modules/response.module';
import userController from './user.controller';

const router: Router = express.Router();

router.get("/all", async function(req: Request, res: Response){
    try {
        const user: User[] = await userController.getAllUsers();
        responseModule.success(req, res, user);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.get('/:id', async function(req: Request, res: Response){
    const id : String = req.params['id'];
    try {
        let user: User | null = await userController.getUserById(id);
        responseModule.success(req, res, user);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.get('/:email', async function(req: Request, res: Response){
    const email : String = req.params['email'];
    try {
        let user: User | null = await userController.getUserByEmail(email);
        responseModule.success(req, res, user);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){
    const user: User=req.body;
    try {
        const Result: User| null = await userController.addUser(user);
        responseModule.success(req, res, Result,201);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

export default router;