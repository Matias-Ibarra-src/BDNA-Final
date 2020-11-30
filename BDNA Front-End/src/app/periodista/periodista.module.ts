import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodistaRoutingModule } from './periodista-routing.module';
import { PeriodistaComponent } from './periodista.component';
import { MisNoticiasScreenComponent } from './screens/mis-noticias-screen/mis-noticias-screen.component';
import { CrearNoticiaScreensComponent } from './screens/crear-noticia-screens/crear-noticia-screens.component';
import { ModificarNoticiaScreensComponent } from './screens/modificar-noticia-screens/modificar-noticia-screens.component';
import { NoticiasCardComponent } from './components/noticias-card/noticias-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    PeriodistaComponent,
    MisNoticiasScreenComponent,
    CrearNoticiaScreensComponent,
    ModificarNoticiaScreensComponent,
    NoticiasCardComponent
  ],
  imports: [
    CommonModule,
    PeriodistaRoutingModule,
    ReactiveFormsModule
  ]
})
export class PeriodistaModule { }
