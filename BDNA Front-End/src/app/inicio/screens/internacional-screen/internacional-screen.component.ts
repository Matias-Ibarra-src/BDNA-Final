import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiasProviderService } from 'src/app/core/providers/noticias/noticias-provider.service';
import { Usuario } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-internacional-screen',
  templateUrl: './internacional-screen.component.html',
  styleUrls: ['./internacional-screen.component.sass']
})
export class InternacionalScreenComponent implements OnInit {

  public noticias$: Observable<Noticia[]>;
  public usuario: Usuario;

  constructor(
    private noticiaprovider: NoticiasProviderService
  ){
    this.noticias$ = this.GetAllNoticias();
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllNoticias(): Observable<Noticia[]>{
    return this.noticiaprovider.GetAllNoticias();
  }
}
