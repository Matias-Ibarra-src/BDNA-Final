import { Component, Input, OnInit } from '@angular/core';
import { Reporte } from '../../../core/models/reporte.model';

@Component({
  selector: 'app-reporte-card',
  templateUrl: './reporte-card.component.html',
  styleUrls: ['./reporte-card.component.sass']
})
export class ReporteCardComponent implements OnInit {

  @Input()
  public reporte: Reporte;
  public tipo: number;

  constructor() {
  }

  ngOnInit(): void {
    this.tipo = this.ParseNumber(this.reporte.tipo);
  }

  // tslint:disable-next-line: typedef
  ParseNumber(Tipo: string): number{
    switch (Tipo){
      case ('Reclamo'): {
        return 1;
      }
      case('Opinion'): {
        return 2;
      }
      case('Consulta'): {
        return 3;
      }
      case('Sugerencia'): {
        return 4;
      }
    }
  }
}
