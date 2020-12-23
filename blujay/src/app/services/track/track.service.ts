import {Apollo, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Track } from 'src/app/models/track';

import { map } from 'rxjs/operators';

import { ToastService } from '../toast/toast.service';
import { HttpClient } from '@angular/common/http';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private _tracks: BehaviorSubject<Track[]> = new BehaviorSubject([]);
  tracks$: Observable<Track[]> = this._tracks.asObservable();
  trackSub: Subscription;

  constructor(private _toastService: ToastService, private _http: HttpClient) { }

  loadTracks() {
    this.trackSub = this._http.get(`${environment.api}/tracks`).subscribe((tracks) => {
      this._tracks.next(tracks as Track[]);
    }, (error) => {
      this._toastService.sendMessage('We can\'t load the tracks right now. Try again later.', 'is-danger');
      console.error(error);
    });
  }

  trackAddedToCart(id: number) {
    this._updateInCart(id, true);
  }

  trackRemovedFromCart(id: number) {
    this._updateInCart(id, false);
  }

  _updateInCart(id: number, inCart: boolean) {
    const tracks = this._tracks.value;
    for (const t of tracks) {
      if (+t.id === +id){
        t.inCart = inCart;
      }
    }
    this._tracks.next(tracks);
  }
}
