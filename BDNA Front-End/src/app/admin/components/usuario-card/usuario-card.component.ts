import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.sass']
})
export class UsuarioCardComponent implements OnInit {

  @Input()
  public usuario: Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
