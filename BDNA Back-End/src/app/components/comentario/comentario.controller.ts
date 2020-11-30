import { Comentario } from '../../models/comentario.model';
import comentarioRepository from "../comentario/comentario.repository";
function getAllComentarios(): Promise<Comentario[]>{
    return comentarioRepository.getAllComentarios();
}

function deleteComentario(id: string){
    return comentarioRepository.deleteComentario(id);
}

function getComentarioById(id : String){
    return comentarioRepository.getComentarioById(id);
}

function addComentario(comentario : Comentario): Promise<Comentario>{
    return comentarioRepository.addComentario(comentario);
}

export default {getAllComentarios , getComentarioById, addComentario, deleteComentario};