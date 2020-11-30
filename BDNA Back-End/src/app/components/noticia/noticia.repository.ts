import { Noticia } from '../../models/noticia.model';
import model from "./noticia.schema";
import noticia from './index';

async function getAllNoticias(): Promise<Noticia[]>{
    return model.find();
}

async function getNoticiaById(id: String){
   return model.findOne({ _id : id});
}

function addNoticia( noticia: Noticia): Promise<Noticia>{
    return model.create<Noticia>(noticia);
}

function deleteNoticia(id : string){
    return model.deleteOne({_id : id}, function(err) {
        if (err) return console.error(err);
      });
}

export default {getAllNoticias , getNoticiaById, addNoticia, deleteNoticia};