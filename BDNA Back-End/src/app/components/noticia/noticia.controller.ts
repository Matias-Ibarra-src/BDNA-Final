import { Noticia } from '../../models/noticia.model';
import noticiaRepository from "../noticia/noticia.repository";
import noticia from './index';

function getAllNoticias(): Promise<Noticia[]>{
    return noticiaRepository.getAllNoticias();
}

function deleteNoticia(id: string){
    return noticiaRepository.deleteNoticia(id);
}

function getNoticiaById(id : String){
    return noticiaRepository.getNoticiaById(id);
}

function addNoticia(noticia : Noticia): Promise<Noticia>{
    noticia.fecha=new Date;
    return noticiaRepository.addNoticia(noticia);
}
export default {getAllNoticias,getNoticiaById,addNoticia,deleteNoticia};