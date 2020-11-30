import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosScreenComponent } from './screens/videos-screen/videos-screen.component';

const routes: Routes = [{path: '', component: VideosScreenComponent }, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
