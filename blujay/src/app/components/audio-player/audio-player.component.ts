import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track';
import { AudioPlayerService } from 'src/app/services/audio-player/audio-player.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})

export class AudioPlayerComponent implements OnInit {
  track: Observable<Track>;
  visible: Observable<boolean>;

  constructor(private playerService: AudioPlayerService) {}

  ngOnInit(): void {
    this.track = this.playerService.playingTrack;
    this.visible = this.playerService.showPlayer;
  }
}
