import { Component, OnInit } from '@angular/core';
import { ReportesProviderService } from '../../../core/providers/reportes/reportes-provider.service';
import { Observable } from 'rxjs';
import { Reporte } from 'src/app/core/models/reporte.model';

@Component({
  selector: 'app-reportes-screen',
  templateUrl: './reportes-screen.component.html',
  styleUrls: ['./reportes-screen.component.sass']
})
export class ReportesScreenComponent implements OnInit {

  public reportes$: Observable<Reporte[]>;

  constructor(private reportesProvider: ReportesProviderService) {
    this.reportes$ = this.GetAllReportes();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllReportes(){
    return this.reportesProvider.GetAllReportes();
  }
}
