import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { DetalleScreenComponent } from './screens/detalle-screen/detalle-screen.component';
import { SemanalScreenComponent } from './screens/semanal-screen/semanal-screen.component';
import { CovidScreenComponent } from './screens/covid-screen/covid-screen.component';
import { TecnologiaScreenComponent } from './screens/tecnologia-screen/tecnologia-screen.component';
import { SportScreenComponent } from './screens/sport-screen/sport-screen.component';
import { InternacionalScreenComponent } from './screens/internacional-screen/internacional-screen.component';
import { NacionalScreenComponent } from './screens/nacional-screen/nacional-screen.component';
import { RatingComponent } from './components/rating/rating.component';
import { ClockComponent } from './components/clock/clock.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { DetalleCardComponent } from './components/detalle-card/detalle-card.component';
import { InicioCardComponent } from './components/inicio-card/inicio-card.component';
import { SemanalCardComponent } from './components/semanal-card/semanal-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { WeatherComponent } from './components/weather/weather.component';
import { NoticiasProviderService } from '../core/providers/noticias/noticias-provider.service';
import { ReclamosScreenComponent } from './screens/reclamos-screen/reclamos-screen.component';
import { ListaComentariosComponent } from './components/lista-comentarios/lista-comentarios.component';
import { ComentariosFormComponent } from './components/comentarios-form/comentarios-form.component';
import { ListaRelacionadasComponent } from './components/lista-relacionadas/lista-relacionadas.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    InicioComponent,
    InicioScreenComponent,
    DetalleScreenComponent,
    SemanalScreenComponent,
    CovidScreenComponent,
    TecnologiaScreenComponent,
    SportScreenComponent,
    InternacionalScreenComponent,
    NacionalScreenComponent,
    RatingComponent,
    ClockComponent,
    ConversorComponent,
    DetalleCardComponent,
    InicioCardComponent,
    SemanalCardComponent,
    SmallCardComponent,
    WeatherComponent,
    ReclamosScreenComponent,
    ListaComentariosComponent,
    ComentariosFormComponent,
    ListaRelacionadasComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    NoticiasProviderService
  ]
})
export class InicioModule { }
