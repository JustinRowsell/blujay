import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Track } from 'src/app/models/track';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private _tracks: BehaviorSubject<Track[]> = new BehaviorSubject([]);
  tracks: Observable<Track[]> = this._tracks.asObservable();

  constructor(private apollo: Apollo) { }

  loadTracks() {
    this.apollo
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
    });

  }
}
