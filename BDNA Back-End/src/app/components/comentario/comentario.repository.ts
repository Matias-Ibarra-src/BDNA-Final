import { Comentario } from '../../models/comentario.model';
import model from "./comentario.schema";

async function getAllComentarios(): Promise<Comentario[]>{
    return model.find();
}

async function getComentarioById(id: String){
   return model.findOne({ _id : id});
}

function addComentario( comentario: Comentario): Promise<Comentario>{
    return model.create<Comentario>(comentario);
}

function deleteComentario(id : string){
    return model.deleteOne({_id : id}, function(err) {
        if (err) return console.error(err);
    });
}

export default {getAllComentarios , getComentarioById, addComentario, deleteComentario};