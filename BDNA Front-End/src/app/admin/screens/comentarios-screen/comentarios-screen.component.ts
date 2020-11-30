import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/core/models/comentario.model';
import { ComentarioProviderService } from '../../../core/providers/comentario/comentario-provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comentarios-screen',
  templateUrl: './comentarios-screen.component.html',
  styleUrls: ['./comentarios-screen.component.sass']
})
export class ComentariosScreenComponent implements OnInit {

  public comentarios$: Observable<Comentario[]>;
  constructor(private CoemntarioProvider: ComentarioProviderService) {
    this.comentarios$ = this.GetAllComentarios();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllComentarios(){
    return this.CoemntarioProvider.GetAllComentarios();
  }
}
