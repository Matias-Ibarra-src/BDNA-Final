export interface Noticia{
    _id?: String;
    titulo: String;
    imgUrl: String;
    VideoUrl?: String;
    resumen: String;
    cuerpo: String;
    fecha: Date;
    categoria: String;
    mostraren: Number;
    autor?: String;
    estado?: String;
    visitas?: Number;
    privada: Boolean;
}