import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from 'src/app/models/track';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {
  private _playingTrack: BehaviorSubject<Track> = new BehaviorSubject(null);
  playingTrack$ = this._playingTrack.asObservable();
  private _showPlayer : BehaviorSubject<boolean> = new BehaviorSubject(false);
  showPlayer$ = this._showPlayer.asObservable();
  private _playing: BehaviorSubject<boolean> = new BehaviorSubject(false);
  playing$ = this._playing.asObservable();

  constructor() {
    this.subscribeForVisible();
  }

  playTrack(track: Track) {
    this._playingTrack.next(track);
    this.isPlaying(true);
  }

  pauseTrack() {
    this.isPlaying(false);
  }

  clearTrack() {
    this.pauseTrack();
    this._playingTrack.next(null);
  }

  subscribeForVisible() {
    this.playingTrack$.subscribe((track) => {
      const showTrack = track !== null;
      this._showPlayer.next(showTrack);
    });
  }

  isPlaying(playing: boolean) {
    this._playing.next(playing);
  }
}
