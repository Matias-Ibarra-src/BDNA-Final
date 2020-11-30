import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-periodista',
  templateUrl: './periodista.component.html',
  styleUrls: ['./periodista.component.sass']
})
export class PeriodistaComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  id_usuario: string;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  traspaso(value: string){
    this.id_usuario = value;
  }
}
