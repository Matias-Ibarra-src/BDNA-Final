import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario.model';
import { NoticiasProviderService } from 'src/app/core/providers/noticias/noticias-provider.service';
import { Noticia } from '../../../core/models/noticia.model';

@Component({
  selector: 'app-modificar-noticia-screens',
  templateUrl: './modificar-noticia-screens.component.html',
  styleUrls: ['./modificar-noticia-screens.component.sass']
})
export class ModificarNoticiaScreensComponent implements OnInit {

  public mostar: number;
  public noticia$: Observable<Noticia>;
  public ModiNoticiaForm: FormGroup;
  public noticias$: Observable<Noticia[]>;
  public usuario: Usuario;

  constructor(private toast: ToastrService, private noticiaProvider: NoticiasProviderService, private activateRoute: ActivatedRoute) {
    this.ModiNoticiaForm = new FormGroup({
      titulo: new FormControl(''),
      img:  new FormControl(''),
      video:  new FormControl(''),
      resumen:  new FormControl(''),
      cuerpo:  new FormControl(''),
      mostrar:  new FormControl('')
    });
  }

  ngOnInit(): void {
    const id: string =  this.activateRoute.snapshot.params['id'];
    this.noticia$ = this.GetById(id);
    this.noticias$ = this.GetAllNoticias();
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }

  // tslint:disable-next-line: typedef
  GetById(id: string): Observable<Noticia>{
    return this.noticiaProvider.getNoticiabyId(id);
  }

  // tslint:disable-next-line: typedef
  GetAllNoticias(): Observable<Noticia[]>{
    return this.noticiaProvider.GetAllNoticias();
  }

  // tslint:disable-next-line: typedef
  async ModificarNoticia(noticia: Noticia, Noticias: Noticia[]){

    if (this.ModiNoticiaForm.get('mostrar').value === 'Inicio'){
      this.mostar = 1;
    }else if (this.ModiNoticiaForm.get('mostrar').value === 'Noticias Pequeñas'){
      this.mostar = 2;
    }

    if (this.ModiNoticiaForm.get('titulo').value === ''){
      if (this.ModiNoticiaForm.get('img').value === ''){
        if (this.ModiNoticiaForm.get('video').value === ''){
          if (this.ModiNoticiaForm.get('resumen').value === ''){
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // no cambia nada
                this.toast.error('No Cambio nada de su noticia', 'Error', {
                  positionClass: 'toast-bottom-center',
                  progressBar: true
                });
              }else{
                // Solo cambia el mostrar en tal caso se agrega como nueva
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };

                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Noticia nueva creada', 'ya que solo cambio donde quiere que se visualize se creo una nueva noticia', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // Cambia solo el cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };

                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }

                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
          }else{
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // Solo cambia Resumen
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };

                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }

                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia Resumen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia Resumen y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia Resumen, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
        }else{
          if (this.ModiNoticiaForm.get('resumen').value === ''){
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // Solo cambia video
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // Cambia video y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia video y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // Cambia video, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
          }else{
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia video y resumen
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia video, resumen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia video, resumen y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia video, resumen, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
      }else{
        if (this.ModiNoticiaForm.get('video').value === ''){
          if (this.ModiNoticiaForm.get('resumen').value === ''){
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // Solo cambia la imagen
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia imagen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia imagen y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia imagen, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
          }else{
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia imagen y resumen
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia imagen, resumen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia imagen, resumen y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia imagen, cuerpo, resumen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
        }else{ //
          if (this.ModiNoticiaForm.get('resumen').value === ''){
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia imagen y video
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia imagen, video y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia imagen, video y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia imagen, video, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
          }else{
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia imagen, video y resumen
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia imagen, video, resumen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia imagen, video, resumen y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia imagen, video, cuerpo, resumen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: noticia.titulo,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
      }
    }else{
      if (this.ModiNoticiaForm.get('img').value === ''){
        if (this.ModiNoticiaForm.get('video').value === ''){
          if (this.ModiNoticiaForm.get('resumen').value === ''){
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // solo cambia el titulo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
          }else{
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo y resumen
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, resumen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo, resumen y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, resumen, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
        }else{
          if (this.ModiNoticiaForm.get('resumen').value === ''){
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // solo cambia el titulo y video
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, video y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo, video y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, video, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
          }else{
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo, video y resumen
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, video, resumen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo, video, resumen y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, video, resumen, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: noticia.imgUrl,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
      }else{
        if (this.ModiNoticiaForm.get('video').value === ''){
          if (this.ModiNoticiaForm.get('resumen').value === ''){
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo y imagen
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, imagen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo, imagen y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, imagen, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
          }else{
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo, imagen y resumen
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, imagen, resumen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo, imagen, resumen y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, imagen, resumen, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: noticia.VideoUrl,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
        }else{
          if (this.ModiNoticiaForm.get('resumen').value === ''){
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // solo cambia el titulo, imagen y video
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, imagen, video y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo, imagen, video y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, imagen, video, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: noticia.resumen,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
          }else{
            if (this.ModiNoticiaForm.get('cuerpo').value === ''){
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo, imagen, video y resumen
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, imagen, video, resumen y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: noticia.cuerpo,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
            }else{
              if (this.ModiNoticiaForm.get('mostrar').value === ''){
                // cambia el titulo, imagen, video, resumen y cuerpo
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: noticia.mostraren,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
                // cambia titulo, imagen, video, resumen, cuerpo y mostrar
                const noticiaNueva: Partial<Noticia> = {
                  titulo: this.ModiNoticiaForm.get('titulo').value,
                  imgUrl: this.ModiNoticiaForm.get('img').value,
                  resumen: this.ModiNoticiaForm.get('resumen').value,
                  cuerpo: this.ModiNoticiaForm.get('cuerpo').value,
                  categoria: noticia.categoria,
                  estado: noticia.estado,
                  VideoUrl: this.ModiNoticiaForm.get('video').value,
                  autor: noticia.autor,
                  visitas: noticia.visitas,
                  mostraren: this.mostar,
                  privada: noticia.privada
                };
                try {
                  await this.noticiaProvider.deleteNoticia(noticia._id).toPromise();
                } catch (error) {
                  this.toast.error('Error al subir la noticia', 'Error', {
                    positionClass: 'toast-bottom-center',
                    progressBar: true
                  });
                }
                try {
                  await this.noticiaProvider.addNoticia(noticiaNueva).toPromise();
                  this.toast.success('Todo Bien', 'Noticia Modificada', {
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
      }
    }
  }
}
