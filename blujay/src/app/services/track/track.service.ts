import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Track } from 'src/app/models/track';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private _tracks: BehaviorSubject<Track[]>;
  tracks: Observable<Track[]> = this._tracks.asObservable();

  constructor(private apollo: Apollo) { }

  loadTracks() {
    /*
    this.apollo
    .watchQuery({
      query: gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `,
    })
    .valueChanges.pipe(
      map(v => v.data)
    )

    .subscribe(result => {
      this.rates = result.data && result.data.rates;
      this.loading = result.loading;
      this.error = result.error;
    });*/

  }
}
