import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

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
