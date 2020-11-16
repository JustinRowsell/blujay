import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from 'src/app/models/track';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {
  private _playingTrack: BehaviorSubject<Track> = new BehaviorSubject(null);
  playingTrack = this._playingTrack.asObservable();
  private _showPlayer : BehaviorSubject<boolean> = new BehaviorSubject(false);
  showPlayer = this._showPlayer.asObservable();

  constructor() {
    this.subscribeForVisible();
  }

  playTrack(track: Track) {
    this._playingTrack.next(track);
  }

  subscribeForVisible() {
    this.playingTrack.subscribe((track) => {
      const showTrack = track !== null;
      console.log(showTrack);
      this._showPlayer.next(showTrack);
    });
  }
}
