import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})

// https://www.npmjs.com/package/ngx-audio-player
export class AudioPlayerComponent implements OnInit {

  @Input() displayTitle: boolean;
  @Input() displayPlayList: boolean;
  @Input() displayVolumeControls: boolean;
  @Input() trackLink: string;
  @Input() trackTitle: string;
  playlist: Track[];

  constructor() { }

  ngOnInit(): void {
    this.playlist = [ { title: this.trackTitle, link: this.trackLink }];
  }

  onEnded(event: any) {
    console.log(event);
  }
}
