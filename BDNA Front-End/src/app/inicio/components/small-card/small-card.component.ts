import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../../../core/models/noticia.model';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.sass']
})
export class SmallCardComponent implements OnInit {
  @Input()
  public tarjetaPeque: Noticia;

  constructor() { }

  ngOnInit(): void {
  }

}
