import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/core/models/video.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.sass']
})
export class VideoCardComponent implements OnInit {

  @Input()
  public Videos: Video[];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  getVideo(url) {
    let video;
    let results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

}
