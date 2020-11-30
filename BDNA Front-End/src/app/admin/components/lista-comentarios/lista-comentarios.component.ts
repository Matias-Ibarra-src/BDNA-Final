import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from 'src/app/core/models/comentario.model';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.sass']
})
export class ListaComentariosComponent implements OnInit {

  @Input()
  public comentarios: Comentario[];
  @Input()
  public idNoticia: string;

  constructor() { }

  ngOnInit(): void {
  }
}
