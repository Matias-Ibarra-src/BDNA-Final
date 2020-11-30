import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../models/video.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class VideosProviderService {

  constructor(private httpservice: HttpService) { }

  // tslint:disable-next-line: typedef
  public addVideo(video: any): Observable<Video>{
    return this.httpservice.post<Video>('/video/add', video);
  }

  // tslint:disable-next-line: typedef
  public GetAllVideos(): Observable<Video[]>{
    return this.httpservice.get<Video[]>('/video/all');
  }
}
