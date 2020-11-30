import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../../core/models/noticia.model';

@Component({
  selector: 'app-lista-relacionadas',
  templateUrl: './lista-relacionadas.component.html',
  styleUrls: ['./lista-relacionadas.component.sass']
})
export class ListaRelacionadasComponent implements OnInit {

  @Input()
  public Noticias: Noticia[];
  @Input()
  public NoticiaPrimaria: Noticia;

  public noticia1: Noticia;
  public noticia2: Noticia;
  public noticia3: Noticia;

  constructor() { }

  ngOnInit(): void {
    this.SetNoticiasRelacionadas();
  }

  // tslint:disable-next-line: typedef
  SetNoticiasRelacionadas(){
    for (const noticiaNueva of this.Noticias){
      if (noticiaNueva.categoria === this.NoticiaPrimaria.categoria){
        if (!(noticiaNueva._id === this.NoticiaPrimaria._id)){
          if (!this.noticia1){
            this.noticia1 = noticiaNueva;
          }else if (!this.noticia2){
            this.noticia2 = noticiaNueva;
          }else if (!this.noticia3){
            this.noticia3 = noticiaNueva;
          }else{
            break;
          }
        }
      }
    }
  }
}
