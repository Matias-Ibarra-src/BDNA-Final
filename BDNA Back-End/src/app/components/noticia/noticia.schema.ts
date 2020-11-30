import { model, Schema, Document } from "mongoose";
import { Noticia } from '../../models/noticia.model';

const definition: Partial<Record< keyof Noticia, any>> = {
    titulo: {type : String , required : true },
    imgUrl: {type : String , required : true},
    resumen: { type : String , required : true},
    cuerpo: { type : String , required : true},
    categoria: { type : String , required : true},
    VideoUrl: {type : String },
    autor:{type : String, required : true},
    estado:{type : String},
    visitas: {type : Number },
    mostraren:{type : Number},
    fecha: {type: Date},
    privada: {type: Boolean, required : true}
};

const schema : Schema<Noticia> = new Schema(definition);

export default model<Noticia & Document>('Noticia',schema,'Noticias')
