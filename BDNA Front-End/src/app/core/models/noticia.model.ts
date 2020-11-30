export interface Noticia{
  _id?: string;
  titulo: string;
  imgUrl: string;
  VideoUrl?: string;
  resumen: string;
  cuerpo: string;
  fecha: Date;
  categoria: string;
  mostraren: number;
  autor?: string;
  estado?: string;
  visitas?: number;
  privada: boolean;
}
