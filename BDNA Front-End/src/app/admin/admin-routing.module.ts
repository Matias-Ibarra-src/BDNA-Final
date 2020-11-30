import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { IniciomoduloScreenComponent } from './screens/iniciomodulo-screen/iniciomodulo-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { ReportesScreenComponent } from './screens/reportes-screen/reportes-screen.component';
import { ComentariosScreenComponent } from './screens/comentarios-screen/comentarios-screen.component';
import { UsuariosScreenComponent } from './screens/usuarios-screen/usuarios-screen.component';
import { DetalleAdminScreenComponent } from './screens/detalle-admin-screen/detalle-admin-screen.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: '', component: IniciomoduloScreenComponent},
      {path: 'noticias', component: NoticiasScreenComponent},
      {path: 'reportes', component: ReportesScreenComponent},
      {path: 'comentarios', component: ComentariosScreenComponent},
      {path: 'usuarios', component: UsuariosScreenComponent},
      {path: 'detalle/:id', component: DetalleAdminScreenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
