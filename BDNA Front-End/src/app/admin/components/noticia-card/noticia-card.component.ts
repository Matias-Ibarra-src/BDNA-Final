import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/models/noticia.model';
import { FormGroup, FormControl } from '@angular/forms';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.sass']
})
export class NoticiaCardComponent implements OnInit {

  @Input()
  public noticia: Noticia;
  public FormEstado: FormGroup;
  constructor(private noticiaProvider: NoticiasProviderService, private toast: ToastrService) {
    this.FormEstado = new FormGroup({
      Estado: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async ModificarEstado(){
    if (this.FormEstado.get('Estado').value === ''){
      this.toast.error('Cambio de estado vacio', 'Error', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
    }else{
      const EstadoNuevo: Partial<Noticia> = {
        titulo: this.noticia.titulo,
        imgUrl: this.noticia.imgUrl,
        resumen: this.noticia.resumen,
        cuerpo: this.noticia.cuerpo,
        categoria: this.noticia.categoria,
        estado: this.FormEstado.get('Estado').value,
        VideoUrl: this.noticia.VideoUrl,
        autor: this.noticia.autor,
        visitas: this.noticia.visitas,
        mostraren: this.noticia.mostraren,
        privada: this.noticia.privada
      };

      try {
        await this.noticiaProvider.deleteNoticia(this.noticia._id).toPromise();
      } catch (error) {
        this.toast.error('Error al subir la noticia', 'Error', {
          positionClass: 'toast-bottom-center',
          progressBar: true
        });
      }

      try {
        await this.noticiaProvider.addNoticia(EstadoNuevo).toPromise();
        this.toast.success('Todo Bien', 'Noticia Modificada', {
          positionClass: 'toast-bottom-center',
          progressBar: true
        });
        window.location.reload();
      } catch (error) {
        this.toast.error('Error al subir la noticia', 'Error', {
          positionClass: 'toast-bottom-center',
          progressBar: true
        });
      }
    }
  }
}
