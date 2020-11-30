import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http/http.service';
import { Reporte } from '../../models/reporte.model';

@Injectable({
  providedIn: 'root'
})
export class ReportesProviderService {

  constructor(private httpservice: HttpService) { }

    // tslint:disable-next-line: typedef
    public addReporte(reporte: any): Observable<Reporte>{
      return this.httpservice.post<Reporte>('/reporte/add', reporte);
    }

    // tslint:disable-next-line: typedef
    public GetAllReportes(): Observable<Reporte[]>{
      return this.httpservice.get<Reporte[]>('/reporte/all');
    }
}
