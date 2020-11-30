import { model, Schema, Document } from "mongoose";
import { Reporte } from '../../models/reporte.model';

const definition: Partial<Record< keyof Reporte, any>> = {
    Email_asociado: {type : String , required : true },
    tipo: {type : String , required : true },
    Reclamo: {type : String , required : true },
    Estado: {type : String , required : true }
};

const schema : Schema<Reporte> = new Schema(definition);

export default model<Reporte & Document>('Reporte',schema,'Reportes')