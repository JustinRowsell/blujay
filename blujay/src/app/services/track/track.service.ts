import {Apollo, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Track } from 'src/app/models/track';

import { map } from 'rxjs/operators';

import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private _tracks: BehaviorSubject<Track[]> = new BehaviorSubject([]);
  tracks$: Observable<Track[]> = this._tracks.asObservable();

  constructor(private _apollo: Apollo, private _toastService: ToastService) { }

  loadTracks() {
    this._apollo
    .watchQuery({
      query: gql`
        {
          allTracks{
            id,
            description,
            file,
            title,
            price,
            image
          }
        }
      `,
    })
    .valueChanges.pipe(
      map(v => v.data),
      map((v: any) => v.allTracks)
    ).subscribe((tracks: Track[]) => {
      // copy tracks so objects are mutable
      const deepCopyTracks = tracks.map(t => Object.assign({}, t, {inCart: false}));
      this._tracks.next(deepCopyTracks);
    }, (err) => {
      this._toastService.sendMessage('We can\'t load the tracks right now. Try again later.', 'is-danger');
      console.error(err);
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
