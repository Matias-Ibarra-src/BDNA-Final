import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioProviderService } from '../../../core/providers/usuario/usuario-provider.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.sass']
})
export class RegisterScreenComponent implements OnInit {

  public flag = true;
  constructor(
    private toast: ToastrService, private userProvider: UsuarioProviderService) {
    this.formRegistro = new FormGroup({
      nick: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required),
      confirmar: new FormControl('', Validators.required),
      esperio: new FormControl('')
    });

    this.usuarios$ = this.GetAllusers();
  }

  public formRegistro: FormGroup;
  public usuarios$: Observable<Usuario[]>;

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllusers(): Observable<Usuario[]>{
    return this.userProvider.GetAllUsuarios();
  }

  // tslint:disable-next-line: typedef
  esEmailValido(email: string){
    let mailValido = false;

    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(EMAIL_REGEX)){
      mailValido = true;
    }
    return mailValido;
  }

  // tslint:disable-next-line: typedef
  public async Registrarse(usuarios: Usuario[]){
    this.flag = true;
    for (const user of usuarios){
      if (user.Email === this.formRegistro.get('Email').value){
        this.toast.error('Email Duplicado', 'El email ya existe', {
          positionClass: 'toast-bottom-center',
          progressBar: true
        });
        this.flag = false;
      }else if (user.nick === this.formRegistro.get('nick').value){
        this.toast.error('Nombre de usuario', 'El nick ya existe', {
          positionClass: 'toast-bottom-center',
          progressBar: true
        });
        this.flag = false;
      }
    }

    if (this.formRegistro.get('nick').value === ''){
      this.toast.error('Campos Vacios', 'el nombre de usuario es obligatorio', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }
    if (this.formRegistro.get('nombre').value === ''){
      this.toast.error('Campos Vacios', 'el nombre es obligatorio', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }
    if (this.formRegistro.get('apellido').value === ''){
      this.toast.error('Campos Vacios', 'el apellido es obligatorio', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }
    if (!(this.esEmailValido(this.formRegistro.get('Email').value))){
      this.toast.error('Utilize un email valido', 'Email invalido', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }
    if (this.formRegistro.get('Email').value === ''){
      this.toast.error('Campos Vacios', 'el Email es obligatorio', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }
    if (this.formRegistro.get('contraseña').value === ''){
      this.toast.error('Campos Vacios', 'la contraseña es obligatoria', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }
    if (this.formRegistro.get('confirmar').value === ''){
      this.toast.error('Campos Vacios', 'la confirmacion es obligatoria', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
      this.flag = false;
    }

    if (!(this.formRegistro.get('contraseña').value === this.formRegistro.get('confirmar').value)){
      this.toast.error('Contraseñas Diferentes', 'Las contraseñas no coinciden', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
    }else{
      if (this.flag){
        const usuarioNuevo: Partial<Usuario> = {
          nick: this.formRegistro.get('nick').value,
          Nombre: this.formRegistro.get('nombre').value,
          Apellido: this.formRegistro.get('apellido').value,
          Email: this.formRegistro.get('Email').value,
          Password: this.formRegistro.get('contraseña').value,
          rol: 'Usuario'
        };

        try {
          await this.userProvider.addUsuario(usuarioNuevo).toPromise();
          this.toast.success('Correcto', 'Usuario creado correctamente', {
            positionClass: 'toast-bottom-center',
            progressBar: true
          });
          this.formRegistro.get('nick').setValue('');
          this.formRegistro.get('nombre').setValue('');
          this.formRegistro.get('apellido').setValue('');
          this.formRegistro.get('Email').setValue('');
          this.formRegistro.get('contraseña').setValue('');
          this.formRegistro.get('confirmar').setValue('');
        } catch (error) {
          this.toast.error('Error', 'Usuario no creado', {
            positionClass: 'toast-bottom-center',
            progressBar: true
          });
        }
      }
    }
  }

}
