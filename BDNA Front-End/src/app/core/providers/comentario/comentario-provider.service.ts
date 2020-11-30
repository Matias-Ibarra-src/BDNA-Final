import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../../models/comentario.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioProviderService {

  constructor(private httpservice: HttpService) { }

  // tslint:disable-next-line: typedef
  public addComentario(comentario: any): Observable<Comentario>{
    return this.httpservice.post<Comentario>('/comentario/add', comentario);
  }

  // tslint:disable-next-line: typedef
  public GetAllComentarios(): Observable<Comentario[]>{
    return this.httpservice.get<Comentario[]>('/comentario/all');
  }

  // tslint:disable-next-line: typedef
  public deleteComentario(id: string){
    return this.httpservice.delete<Comentario>('/comentario/delete/' + id);
  }
}
