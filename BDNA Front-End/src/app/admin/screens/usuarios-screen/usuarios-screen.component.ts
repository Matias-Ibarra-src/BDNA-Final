import { Component, OnInit } from '@angular/core';
import { UsuarioProviderService } from '../../../core/providers/usuario/usuario-provider.service';
import { Usuario } from '../../../core/models/usuario.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios-screen',
  templateUrl: './usuarios-screen.component.html',
  styleUrls: ['./usuarios-screen.component.sass']
})
export class UsuariosScreenComponent implements OnInit {

  public Usuarios$: Observable<Usuario[]>;

  constructor(private usuarioProvider: UsuarioProviderService) {
    this.Usuarios$ = this.GetAllUsuarios();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllUsuarios(){
    return this.usuarioProvider.GetAllUsuarios();
  }
}
