import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';
import { ComentarioProviderService } from '../../../core/providers/comentario/comentario-provider.service';
import { Comentario } from 'src/app/core/models/comentario.model';
import { Usuario } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-detalle-screen',
  templateUrl: './detalle-screen.component.html',
  styleUrls: ['./detalle-screen.component.sass']
})
export class DetalleScreenComponent implements OnInit {

  public noticia$: Observable<Noticia>;
  public Comentarios$: Observable<Comentario[]>;
  public Id: string;
  public usuario: Usuario;
  public Noticias$: Observable<Noticia[]>;

  constructor(
    private noticiaprovider: NoticiasProviderService,
    private comentarProvider: ComentarioProviderService,
    private activateRoute: ActivatedRoute

  ) {
    if ( sessionStorage.getItem('usuario')) {
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    }
    this.Noticias$ = this.GetAllNoticias();
  }

  ngOnInit(): void {
    const id: string =  this.activateRoute.snapshot.params['id'];
    this.Id = id;
    this.noticia$ = this.GetById(id);
    this.Comentarios$ = this.GetAllComentario();
  }

  // tslint:disable-next-line: typedef
  GetAllComentario(): Observable<Comentario[]>{
    return this.comentarProvider.GetAllComentarios();
  }

  // tslint:disable-next-line: typedef
  GetAllNoticias(): Observable<Noticia[]>{
    return this.noticiaprovider.GetAllNoticias();
  }

  // tslint:disable-next-line: typedef
  GetById(id: string): Observable<Noticia>{
    return this.noticiaprovider.getNoticiabyId(id);
  }

}
