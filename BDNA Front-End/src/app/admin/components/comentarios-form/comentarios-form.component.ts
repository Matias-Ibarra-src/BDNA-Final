import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../core/models/usuario.model';
import { ComentarioProviderService } from '../../../core/providers/comentario/comentario-provider.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { Comentario } from 'src/app/core/models/comentario.model';

@Component({
  selector: 'app-comentarios-form',
  templateUrl: './comentarios-form.component.html',
  styleUrls: ['./comentarios-form.component.sass']
})
export class ComentariosFormComponent implements OnInit {

  @Input()
  public user: Usuario;
  @Input()
  public idAsociado: string;
  public formComentario: FormGroup;
  public Flag: boolean;

  constructor(private comentarioProvider: ComentarioProviderService, private toast: ToastrService){
    this.formComentario = new FormGroup({
      Comentario: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async ComentarioNuevo(){
    this.Flag = true;
    if (this.formComentario.get('Comentario').value === ''){
      this.toast.error('Escribe algo Primero', 'Comentario vacio', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.Flag = false;
    }

    if (this.Flag){
      const ComentarioNuevo: Partial<Comentario> = {
        comentario: this.formComentario.get('Comentario').value,
        autor: this.user.nick,
        id_asociado: this.idAsociado
      };
      try {
        await this.comentarioProvider.addComentario(ComentarioNuevo).toPromise();
        this.toast.success('Comentario creado', 'Comentario aceptado', {
          positionClass: 'toast-bottom-center',
          progressBar: true
        });
        this.formComentario.get('Comentario').setValue('');
      } catch (error) {
        this.toast.error('Error al Comentar', 'Error', {
          positionClass: 'toast-bottom-center',
          progressBar: true
        });
      }
    }
  }
}
