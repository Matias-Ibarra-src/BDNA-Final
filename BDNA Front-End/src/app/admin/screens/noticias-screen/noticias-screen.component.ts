import { Component, OnInit } from '@angular/core';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';

@Component({
  selector: 'app-noticias-screen',
  templateUrl: './noticias-screen.component.html',
  styleUrls: ['./noticias-screen.component.sass']
})
export class NoticiasScreenComponent implements OnInit {

  public Noticias$: Observable<Noticia[]>;
  constructor(private noticiaProvider: NoticiasProviderService) {
    this.Noticias$ = this.GetAllNoticias();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllNoticias(){
    return this.noticiaProvider.GetAllNoticias();
  }
}
