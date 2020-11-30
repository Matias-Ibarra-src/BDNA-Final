import { model, Schema, Document } from "mongoose";
import { Video } from '../../models/video.model';
import video from './index';

const definition: Partial<Record< keyof Video, any>> = {
    titulo: {type : String , required : true },
    videoUrl: {type : String , required : true},
    descripcion: { type : String , required : true},
    fecha: {type: Date}
};

const schema : Schema<Video> = new Schema(definition);

export default model<Video & Document>('Video',schema,'Videos')
