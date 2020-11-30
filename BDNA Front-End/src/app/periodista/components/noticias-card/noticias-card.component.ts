import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';

@Component({
  selector: 'app-noticias-card',
  templateUrl: './noticias-card.component.html',
  styleUrls: ['./noticias-card.component.sass']
})
export class NoticiasCardComponent implements OnInit {

  @Input()
  public miasTarjeta: Noticia;
  constructor(private toast: ToastrService, private noticiaProvider: NoticiasProviderService) {
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async EliminarNoticia(id: string){
    try {
      await this.noticiaProvider.deleteNoticia(id).toPromise();
    } catch (error) {
      this.toast.error('Error al subir la noticia', 'Error', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
    }
  }

}
