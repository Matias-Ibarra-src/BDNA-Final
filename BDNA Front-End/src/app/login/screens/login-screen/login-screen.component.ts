import { Component, Input, OnInit} from '@angular/core';
import { UsuarioProviderService } from '../../../core/providers/usuario/usuario-provider.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.sass']
})
export class LoginScreenComponent implements OnInit {

  public flagCorreo: boolean;
  public flagContraseña: boolean;
  public usuarios$: Observable<Usuario[]>;
  public LoginFormGroup: FormGroup;

  constructor(private toast: ToastrService, private userProvider: UsuarioProviderService, private router: Router) {
    this.LoginFormGroup = new FormGroup({
      Email: new FormControl(''),
      Password: new FormControl(''),
    });
    this.usuarios$ = this.GetAllusers();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllusers(): Observable<Usuario[]>{
    return this.userProvider.GetAllUsuarios();
  }

  // tslint:disable-next-line: typedef
  public ComprobarUsuario(users: Usuario[]){
    this.flagCorreo = false;
    this.flagContraseña = false;

    for (const usuario of users){
      if (usuario.Email === this.LoginFormGroup.get('Email').value){
        if (usuario.Password === this.LoginFormGroup.get('Password').value){
          sessionStorage.setItem('usuario', JSON.stringify(usuario));
          this.router.navigate(['']);
          return 0;
        }
        this.flagCorreo = true;
      }
    }
    this.flagContraseña = true;
    if (!this.flagCorreo){
      this.toast.error('Correo inexistente', 'Error', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
    }
    if (this.flagContraseña){
      this.toast.error('Contraseña Incorrecta', 'Error', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
    }
  }
}
