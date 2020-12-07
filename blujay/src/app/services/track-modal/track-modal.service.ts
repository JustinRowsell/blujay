import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Track } from 'src/app/models/track';

@Injectable({
  providedIn: 'root'
})
export class TrackModalService {
  private _modalTrack = new BehaviorSubject<Track>(null);
  modalTrack$: Observable<Track> = this._modalTrack.asObservable();

  private _showModal = new BehaviorSubject<boolean>(false);
  showModal$: Observable<boolean> = this._showModal.asObservable();

  constructor() { }

  showTrackDetails(track: Track): void {
    this._modalTrack.next(track);
    this._showModal.next(true);
  }

  hideTrackDetails(): void {
    this._showModal.next(false);
    this._modalTrack.next(null);
  }
}
