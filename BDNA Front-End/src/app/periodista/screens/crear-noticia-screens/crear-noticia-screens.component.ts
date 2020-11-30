import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { Noticia } from '../../../core/models/noticia.model';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-crear-noticia-screens',
  templateUrl: './crear-noticia-screens.component.html',
  styleUrls: ['./crear-noticia-screens.component.sass']
})
export class CrearNoticiaScreensComponent implements OnInit {

  public mostar: number;
  public flag = true;
  public noticias$: Observable<Noticia[]>;
  public FormNoticia: FormGroup;
  public usuario: Usuario;
  constructor(private toast: ToastrService, private noticiasProvider: NoticiasProviderService) {
    this.FormNoticia = new FormGroup({
      titulo: new FormControl(''),
      img:  new FormControl(''),
      video:  new FormControl(''),
      resumen:  new FormControl(''),
      Private: new FormControl(false),
      cuerpo:  new FormControl(''),
      mostrar:  new FormControl(''),
      categoria: new FormControl('')
    });

    this.noticias$ = this.GetAllNoticias();
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllNoticias(): Observable<Noticia[]>{
    return this.noticiasProvider.GetAllNoticias();
  }

  // tslint:disable-next-line: typedef
  public async CrearNoticia(noticias: Noticia[]){
    this.flag = true;
    console.log(this.FormNoticia.get('Private').value);
    if (this.FormNoticia.get('mostrar').value === 'Inicio'){
      this.mostar = 1;
    }else{
      this.mostar = 2;
    }

    if (this.FormNoticia.get('titulo').value === ''){
      this.toast.error('El titulo es obligatorio', 'Titulo vacio', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }
    if (this.FormNoticia.get('img').value === ''){
      this.toast.error('la imagen es obligatoria', 'img vacio', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }
    if (this.FormNoticia.get('resumen').value === ''){
      this.toast.error('El resumen es obligatorio', 'Resumen vacio', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }
    if (this.FormNoticia.get('cuerpo').value === ''){
      this.toast.error('El cuerpo es obligatorio', 'Cuerpo vacio', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }

    for (const noticia of noticias){
      if (noticia.titulo === this.FormNoticia.get('titulo').value){
        this.toast.error('La noticia ya existe con ese titulo', 'Titulo Duplicado', {
          positionClass: 'toast-bottom-center',
          progressBar: true
        });
        this.flag = false;
      }
      if (noticia.resumen === this.FormNoticia.get('resumen').value){
        this.toast.error('La noticia ya existe', 'Noticia ya Existente', {
          positionClass: 'toast-bottom-center',
          progressBar: true
        });
        this.flag = false;
      }
    }

    if (this.flag){
      if (this.FormNoticia.get('video').value === ''){
        const noticiaNueva: Partial<Noticia> = {
          titulo: this.FormNoticia.get('titulo').value,
          imgUrl: this.FormNoticia.get('img').value,
          resumen: this.FormNoticia.get('resumen').value,
          cuerpo: this.FormNoticia.get('cuerpo').value,
          categoria: this.FormNoticia.get('categoria').value,
          privada: this.FormNoticia.get('Private').value,
          estado: 'Aprobacion',
          autor: this.usuario.nick,
          visitas: 0,
          mostraren: this.mostar
        };

        try {
          await this.noticiasProvider.addNoticia(noticiaNueva).toPromise();
          this.toast.success('Noticia Creada', 'La noticia queda para revision del administrador', {
            positionClass: 'toast-bottom-center',
            progressBar: true
          });
        } catch (error) {
          this.toast.error('Error al subir la noticia', 'Error', {
            positionClass: 'toast-bottom-center',
            progressBar: true
          });
        }
      }else{
        const noticiaNueva: Partial<Noticia> = {
          titulo: this.FormNoticia.get('titulo').value,
          imgUrl: this.FormNoticia.get('img').value,
          resumen: this.FormNoticia.get('resumen').value,
          cuerpo: this.FormNoticia.get('cuerpo').value,
          categoria: this.FormNoticia.get('categoria').value,
          privada: this.FormNoticia.get('Private').value,
          estado: 'Aprobacion',
          VideoUrl: this.FormNoticia.get('video').value,
          autor: this.usuario.nick,
          visitas: 0,
          mostraren: this.mostar
        };

        try {
          await this.noticiasProvider.addNoticia(noticiaNueva).toPromise();
          this.toast.success('Noticia Creada', 'La noticia queda para revision del administrador', {
            positionClass: 'toast-bottom-center',
            progressBar: true
          });
        } catch (error) {
          this.toast.error('Error al subir la noticia', 'Error', {
            positionClass: 'toast-bottom-center',
            progressBar: true
          });
        }
      }
    }
  }
}
