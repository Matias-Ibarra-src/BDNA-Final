import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Comentario } from 'src/app/core/models/comentario.model';
import { Noticia } from 'src/app/core/models/noticia.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { ComentarioProviderService } from 'src/app/core/providers/comentario/comentario-provider.service';
import { NoticiasProviderService } from 'src/app/core/providers/noticias/noticias-provider.service';

@Component({
  selector: 'app-detalle-admin-screen',
  templateUrl: './detalle-admin-screen.component.html',
  styleUrls: ['./detalle-admin-screen.component.sass']
})
export class DetalleAdminScreenComponent implements OnInit {

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
