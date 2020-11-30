import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { NoticiasProviderService } from 'src/app/core/providers/noticias/noticias-provider.service';

@Component({
  selector: 'app-sport-screen',
  templateUrl: './sport-screen.component.html',
  styleUrls: ['./sport-screen.component.sass']
})
export class SportScreenComponent implements OnInit {

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
