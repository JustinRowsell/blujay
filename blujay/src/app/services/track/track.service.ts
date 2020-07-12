import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Track } from 'src/app/models/track';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
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
      this._tracks.next(tracks);
    }, (err) => {
      this._toastService.sendMessage('We\'re Unable to load the tracks right now. Try again later.', 'is-danger')
      console.error(err);
    });

  }
}
