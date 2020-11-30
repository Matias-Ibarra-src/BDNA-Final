import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { IniciomoduloScreenComponent } from './screens/iniciomodulo-screen/iniciomodulo-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { ComentariosScreenComponent } from './screens/comentarios-screen/comentarios-screen.component';
import { ReportesScreenComponent } from './screens/reportes-screen/reportes-screen.component';
import { UsuariosScreenComponent } from './screens/usuarios-screen/usuarios-screen.component';
import { DetalleAdminScreenComponent } from './screens/detalle-admin-screen/detalle-admin-screen.component';
import { UsuarioCardComponent } from './components/usuario-card/usuario-card.component';
import { ComentarioCardComponent } from './components/comentario-card/comentario-card.component';
import { ReporteCardComponent } from './components/reporte-card/reporte-card.component';
import { NoticiaCardComponent } from './components/noticia-card/noticia-card.component';
import { ListaComentariosComponent } from './components/lista-comentarios/lista-comentarios.component';
import { ComentariosFormComponent } from './components/comentarios-form/comentarios-form.component';
import { ListaRelacionadasComponent } from './components/lista-relacionadas/lista-relacionadas.component';
import { DetalleCardComponent } from './components/detalle-card/detalle-card.component';
import { RatingComponent } from './components/rating/rating.component';



@NgModule({
  declarations: [
    AdminComponent,
    IniciomoduloScreenComponent,
    NoticiasScreenComponent,
    ComentariosScreenComponent,
    ReportesScreenComponent,
    UsuariosScreenComponent,
    DetalleAdminScreenComponent,
    UsuarioCardComponent,
    ComentarioCardComponent,
    ReporteCardComponent,
    NoticiaCardComponent,
    ListaComentariosComponent,
    ComentariosFormComponent,
    ListaRelacionadasComponent,
    DetalleCardComponent,
    RatingComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
