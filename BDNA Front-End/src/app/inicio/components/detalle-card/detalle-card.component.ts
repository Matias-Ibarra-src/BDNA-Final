import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../../core/models/noticia.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle-card',
  templateUrl: './detalle-card.component.html',
  styleUrls: ['./detalle-card.component.sass']
})
export class DetalleCardComponent implements OnInit {

  @Input()
  public DetalleTarjeta: Noticia;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

    // tslint:disable-next-line: typedef
    getVideo(url) {
      let video;
      let results;

      if (url === null) {
        return '';
      }
      results = url.match('[\\?&]v=([^&#]*)');
      video = (results === null) ? url : results[1];

      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
    }

}
