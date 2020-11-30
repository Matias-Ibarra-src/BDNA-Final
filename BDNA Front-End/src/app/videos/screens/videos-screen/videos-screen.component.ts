import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from 'src/app/core/models/video.model';
import { VideosProviderService } from '../../../core/providers/videos/videos-provider.service';

@Component({
  selector: 'app-videos-screen',
  templateUrl: './videos-screen.component.html',
  styleUrls: ['./videos-screen.component.sass']
})
export class VideosScreenComponent implements OnInit {

  public videos$: Observable<Video[]>;
  constructor(
    private videosprovider: VideosProviderService
  ){
    this.videos$ = this.GetAllVideos();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllVideos(): Observable<Video[]>{
    return this.videosprovider.GetAllVideos();
  }
}
