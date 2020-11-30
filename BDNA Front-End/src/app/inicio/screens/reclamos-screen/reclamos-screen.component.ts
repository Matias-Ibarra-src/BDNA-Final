import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Reporte } from '../../../core/models/reporte.model';
import { ReportesProviderService } from '../../../core/providers/reportes/reportes-provider.service';

@Component({
  selector: 'app-reclamos-screen',
  templateUrl: './reclamos-screen.component.html',
  styleUrls: ['./reclamos-screen.component.sass']
})
export class ReclamosScreenComponent implements OnInit {
  public usuario: Usuario;
  public perfil: string;
  public NumeroPerfil: number;
  public Flag: boolean;
  public FormReporte: FormGroup;
  constructor(private toast: ToastrService, private reporteProvider: ReportesProviderService) {
    if (sessionStorage.getItem('usuario')){
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this.perfil = this.usuario.rol;
    }

    this.FormReporte = new FormGroup({
      Email: new FormControl(''),
      Objetivo: new FormControl(''),
      Cuerpo: new FormControl('')
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('usuario')){
      this.NumeroPerfil = this.ParseNumber(this.perfil);
    }
  }

  // tslint:disable-next-line: typedef
  ParseNumber(perfil: string): number{
    switch (perfil){
      case ('Usuario'): {
        return 1;
      }
      case('Periodista'): {
        return 2;
      }
      case('Admin'): {
        return 3;
      }
    }
  }

  // tslint:disable-next-line: typedef
  async EnviarReporte(){
    this.Flag = true;
    if (!this.usuario){
      if (this.FormReporte.get('Email').value === ''){
        this.Flag = false;
        this.toast.error('Correo Vacio', 'Error', {
          positionClass: 'toast-bottom-center',
          progressBar: true
        });
      }
    }
    if (this.FormReporte.get('Objetivo').value === ''){
      this.Flag = false;
      this.toast.error('Selecciona un Objetivo', 'Error', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
    }
    if (this.FormReporte.get('Cuerpo').value === ''){
      this.Flag = false;
      this.toast.error('Cuerpo Vacio', 'Error', {
        positionClass: 'toast-bottom-center',
        progressBar: true
      });
    }

    if (this.Flag){
      if (this.usuario){
        const ReporteNuevo: Partial<Reporte> = {
          Email_asociado : this.usuario.Email,
          Reclamo: this.FormReporte.get('Cuerpo').value,
          tipo: this.FormReporte.get('Objetivo').value,
          Estado: 'En Revision',
        };

        try {
          await this.reporteProvider.addReporte(ReporteNuevo).toPromise();
          this.toast.success('Gracias por tu opinion el ticket sera revisado por el administrador', 'Reporte Exitoso', {
            positionClass: 'toast-bottom-center',
            progressBar: true
          });
          this.FormReporte.get('Objetivo').setValue('');
          this.FormReporte.get('Cuerpo').setValue('');
        } catch (error) {
          this.toast.error('Error al subir el reporte', 'Error', {
            positionClass: 'toast-bottom-center',
            progressBar: true
          });
        }
      }else{
        const ReporteNuevo: Partial<Reporte> = {
          Email_asociado : this.FormReporte.get('Email').value,
          Reclamo: this.FormReporte.get('Cuerpo').value,
          tipo: this.FormReporte.get('Objetivo').value,
          Estado: 'En Revision',
        };

        try {
          await this.reporteProvider.addReporte(ReporteNuevo).toPromise();
          this.toast.success('Gracias por tu opinion el ticket sera revisado por el administrador', 'Reporte Exitoso', {
            positionClass: 'toast-bottom-center',
            progressBar: true
          });

          this.FormReporte.get('Email').setValue('');
          this.FormReporte.get('Objetivo').setValue('');
          this.FormReporte.get('Cuerpo').setValue('');
        } catch (error) {
          this.toast.error('Error al subir el reporte', 'Error', {
            positionClass: 'toast-bottom-center',
            progressBar: true
          });
        }
      }
    }
  }
}
