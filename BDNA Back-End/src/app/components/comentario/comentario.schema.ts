import { model, Schema, Document } from "mongoose";
import { Comentario } from '../../models/comentario.model';

const definition: Partial<Record< keyof Comentario, any>> = {
    id_asociado:{type : String , required : true },
    autor: {type : String , required : true },
    comentario: {type : String , required : true }
}

const schema : Schema<Comentario> = new Schema(definition);

export default model<Comentario & Document>('Comentario',schema,'Comentarios')