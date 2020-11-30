import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',  loadChildren: () => import('src/app/inicio/inicio.module').then(m => m.InicioModule)},
  {path: 'videos', loadChildren: () => import('src/app/videos/videos.module').then(m => m.VideosModule) },
  {path: 'login', loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule) },
  {path: 'mis-noticias', loadChildren: () => import('src/app/periodista/periodista.module').then(m => m.PeriodistaModule)},
  {path: 'Admin', loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
