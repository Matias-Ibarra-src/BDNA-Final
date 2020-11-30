import { Express } from "express";
import comentario from "./comentario";
import noticia from "./noticia";
import user from "./user";
import video from "./video";
import reporte from "./reporte";

const components: Express[] = [
    noticia,
    video,
    comentario,
    user,
    reporte
];

export default components;