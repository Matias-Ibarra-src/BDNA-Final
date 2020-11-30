import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from 'src/app/core/models/comentario.model';
import { ComentarioProviderService } from '../../../core/providers/comentario/comentario-provider.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comentario-card',
  templateUrl: './comentario-card.component.html',
  styleUrls: ['./comentario-card.component.sass']
})
export class ComentarioCardComponent implements OnInit {

  @Input()
  public Comentario: Comentario;
  constructor(private toast: ToastrService, private comentarioprovider: ComentarioProviderService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async ElminarComentario(id: string){
    try {
      await this.comentarioprovider.deleteComentario(id).toPromise();
      this.toast.success('Comentario eliminado', 'Completado', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      window.location.reload();
    } catch (error) {
      this.toast.error('Error al eliminar', 'Error', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
    }
  }
}
