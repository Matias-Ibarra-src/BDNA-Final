import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.sass']
})
export class NavegacionComponent implements OnInit {

  public usuario: Usuario;
  public perfil: string;
  public NumeroPerfil: number;
  constructor() {
    if (sessionStorage.getItem('usuario')){
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this.perfil = this.usuario.rol;
    }

  }

  ngOnInit(): void {
    if (sessionStorage.getItem('usuario')){
      this.NumeroPerfil = this.ParseNumber(this.perfil);
    }
  }

  // tslint:disable-next-line: typedef
  CambiarFondo(){
    const btnSwitch = document.querySelector('#switch');

    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    // Guardamos el modo en localstorage.
    if (document.body.classList.contains('dark')){
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }

    // Obtenemos el modo actual.
    if (localStorage.getItem('dark-mode') === 'true'){
      document.body.classList.add('dark');
      btnSwitch.classList.add('active');
    } else {
      document.body.classList.remove('dark');
      btnSwitch.classList.remove('active');
    }
  }

  // tslint:disable-next-line: typedef
  ParseNumber(perfil: string): number{
    switch (perfil){
      case ('Usuario'): {
        return 1;
        break;
      }
      case('Periodista'): {
        return 2;
      }
      case('Admin'): {
        return 3;
        break;
      }
    }
  }
}

