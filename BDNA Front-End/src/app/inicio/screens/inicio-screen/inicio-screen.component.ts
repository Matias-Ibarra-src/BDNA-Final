import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';

@Component({
  selector: 'app-inicio-screen',
  templateUrl: './inicio-screen.component.html',
  styleUrls: ['./inicio-screen.component.sass']
})
export class InicioScreenComponent implements OnInit {

  public noticias$: Observable<Noticia[]>;
  public usuario: Usuario;
  public flag: boolean;

  constructor(
    private noticiaprovider: NoticiasProviderService
  ){
    this.flag = true;
    this.noticias$ = this.GetAllNoticias();
    if (sessionStorage.getItem('usuario')){
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllNoticias(): Observable<Noticia[]>{
    return this.noticiaprovider.GetAllNoticias();
  }
}
