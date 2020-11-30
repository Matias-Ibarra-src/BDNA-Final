import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodistaComponent } from './periodista.component';
import { MisNoticiasScreenComponent } from './screens/mis-noticias-screen/mis-noticias-screen.component';
import { ModificarNoticiaScreensComponent } from './screens/modificar-noticia-screens/modificar-noticia-screens.component';
import { CrearNoticiaScreensComponent } from './screens/crear-noticia-screens/crear-noticia-screens.component';

const routes: Routes = [
  {
    path: '',
    component: PeriodistaComponent,
    children: [
      {path: '', component: MisNoticiasScreenComponent},
      {path: 'modificar/:id', component: ModificarNoticiaScreensComponent},
      {path: 'crear', component: CrearNoticiaScreensComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodistaRoutingModule { }
