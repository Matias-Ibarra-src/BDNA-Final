import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http/http.service';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioProviderService {

  constructor(private httpservice: HttpService) { }

    // tslint:disable-next-line: typedef
    public addUsuario(usuario: Partial<Usuario>){
      return this.httpservice.post<Usuario>('/user/add', usuario);
    }

    // tslint:disable-next-line: typedef
    public getUsuariobyId(id: string){
      return this.httpservice.get<Usuario>('/user/' + id);
    }

    // tslint:disable-next-line: typedef
    public GetAllUsuarios(): Observable<Usuario[]>{
      return this.httpservice.get<Usuario[]>('/user/all');
    }
}
