import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { Noticia } from '../../../core/models/noticia.model';

@Component({
  selector: 'app-semanal-card',
  templateUrl: './semanal-card.component.html',
  styleUrls: ['./semanal-card.component.sass']
})
export class SemanalCardComponent implements OnInit {
  @Input()
  public semanaTarjeta: Noticia;
  public perfil: string;
  public usuario: Usuario;
  constructor() {
    if (sessionStorage.getItem('usuario')){
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this.perfil = this.usuario.rol;
    }
  }

  ngOnInit(): void {
  }

}
