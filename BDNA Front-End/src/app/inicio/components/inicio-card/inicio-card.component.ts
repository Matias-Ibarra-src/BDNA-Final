import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../../../core/models/noticia.model';

@Component({
  selector: 'app-inicio-card',
  templateUrl: './inicio-card.component.html',
  styleUrls: ['./inicio-card.component.sass']
})
export class InicioCardComponent implements OnInit {


  @Input()
  public noticiaTarjeta: Noticia;

  constructor() { }

  ngOnInit(): void {
  }
}
