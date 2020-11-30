import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosScreenComponent } from './screens/videos-screen/videos-screen.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideosProviderService } from '../core/providers/videos/videos-provider.service';


@NgModule({
  declarations: [VideosScreenComponent, VideoCardComponent],
  imports: [
    CommonModule,
    VideosRoutingModule
  ],
  providers:[
    VideosProviderService
  ]
})
export class VideosModule { }
