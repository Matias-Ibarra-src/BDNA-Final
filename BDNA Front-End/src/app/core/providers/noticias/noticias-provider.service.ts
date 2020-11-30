import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../../models/noticia.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasProviderService {

  constructor(private httpservice: HttpService) { }

  // tslint:disable-next-line: typedef
  public addNoticia(noticia: any): Observable<Noticia>{
    return this.httpservice.post<Noticia>('/noticia/add', noticia);
  }

  // tslint:disable-next-line: typedef
  public getNoticiabyId(id: string){
    return this.httpservice.get<Noticia>('/noticia/' + id);
  }

  // tslint:disable-next-line: typedef
  public deleteNoticia(id: string){
    return this.httpservice.delete<Noticia>('/noticia/delete/' + id);
  }

  // tslint:disable-next-line: typedef
  public GetAllNoticias(): Observable<Noticia[]>{
    return this.httpservice.get<Noticia[]>('/noticia/all');
  }
}
