import { Component, OnInit } from '@angular/core';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';
import { Usuario } from '../../../core/models/usuario.model';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';

@Component({
  selector: 'app-mis-noticias-screen',
  templateUrl: './mis-noticias-screen.component.html',
  styleUrls: ['./mis-noticias-screen.component.sass']
})
export class MisNoticiasScreenComponent implements OnInit {

  public user: Usuario;
  public noticias$: Observable<Noticia[]>;

  constructor(
    private noticias: NoticiasProviderService,
  ){
    if (sessionStorage.getItem('usuario')){
      this.user = JSON.parse(sessionStorage.getItem('usuario'));
    }
  }

  ngOnInit(): void {
    this.noticias$ = this.GetAllNoticias();
  }

  // tslint:disable-next-line: typedef
  GetAllNoticias(): Observable<Noticia[]>{
    return this.noticias.GetAllNoticias();
  }

}
