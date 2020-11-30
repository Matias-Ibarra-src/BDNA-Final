import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { DetalleScreenComponent } from './screens/detalle-screen/detalle-screen.component';
import { SemanalScreenComponent } from './screens/semanal-screen/semanal-screen.component';
import { CovidScreenComponent } from './screens/covid-screen/covid-screen.component';
import { NacionalScreenComponent } from './screens/nacional-screen/nacional-screen.component';
import { InternacionalScreenComponent } from './screens/internacional-screen/internacional-screen.component';
import { SportScreenComponent } from './screens/sport-screen/sport-screen.component';
import { TecnologiaScreenComponent } from './screens/tecnologia-screen/tecnologia-screen.component';
import { ReclamosScreenComponent } from './screens/reclamos-screen/reclamos-screen.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {path: '', component: InicioScreenComponent },
      {path: 'detalle/:id', component: DetalleScreenComponent},
      {path: 'noticias-semana', component: SemanalScreenComponent},
      {path: 'reclamo', component: ReclamosScreenComponent},
      {path: 'covid', component: CovidScreenComponent},
      {path: 'nacionales', component:  NacionalScreenComponent},
      {path: 'internacionales', component: InternacionalScreenComponent},
      {path: 'deportes', component: SportScreenComponent},
      {path: 'tecnologia', component: TecnologiaScreenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
