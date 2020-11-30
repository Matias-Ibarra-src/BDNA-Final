import { model, Schema, Document } from "mongoose";
import { User } from '../../models/user.model';

const definition: Partial<Record< keyof User, any>> = {
    Nombre: {type : String , required : true },
    Apellido: {type : String , required : true},
    Email: { type : String , required : true},
    Password: { type : String , required : true},
    nick: { type : String , required : true},
    rol: {type : String}
};

const schema : Schema<User> = new Schema(definition);
export default model<User & Document>('User',schema,'Users');