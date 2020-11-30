import mongooseModule from "./modules/mongoose.module";
import express, { Express, Request, Response } from 'express';
import components from "./components";
import morgan from "morgan";
import cors from "cors";

async function main(){
    
    const server: Express = express(); //new express
    const port: number = 61000;

    server.use(express.json());
    server.use(morgan("dev"));
    server.use(cors());
    server.use('/api', ...components);

    try {
        await mongooseModule.connect(); 
        console.log("conexion exitosa");

        server.listen(port, () => {
            console.log("servidor escuchando en: http://localhost:" + port);
        });
    } catch (error) {
        console.log("conexion fallida");
    }
}

export default { main };