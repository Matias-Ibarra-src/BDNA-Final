import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string;
  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:61000/api';

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        // tslint:disable-next-line: object-literal-key-quotes
        'Authorization': ''
      })
    };
  }

  // tslint:disable-next-line: typedef
  public get<type>(path: string): Observable<type>{
    return this.httpClient.get(this.baseUrl + path, this.httpOptions)
      .pipe(  map((data: any) => {
        return data.message;
      }));
  }

  // tslint:disable-next-line: typedef
  public post<type>(path: string, body: any): Observable<type>{
    return this.httpClient.post(this.baseUrl + path, body, this.httpOptions)
      .pipe( map((data: any) => {
        return data.message;
      }));
  }

  // tslint:disable-next-line: typedef
  public delete<type>(path: string){
    return this.httpClient.delete(this.baseUrl + path, this.httpOptions)
    .pipe(map((data: any) => {
      return data.message;
    }));
  }
}
