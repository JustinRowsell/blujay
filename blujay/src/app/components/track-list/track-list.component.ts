import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';
import { Observable } from 'rxjs';
import { Track } from 'src/app/models/track';
import { map, tap } from 'rxjs/operators';
import { reverse } from 'dns';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  tracksArr$: Observable<Array<Track[]>>;
  columnCount = 4;

  constructor(private _trackService: TrackService, private _cartService: CartService,
              private _toastService: ToastService) { }

  ngOnInit(): void {
    this._trackService.loadTracks();
    this.tracksArr$ = this._trackService.tracks$.pipe(
      map(tracks => {
        const len = Math.floor((tracks.length + 1) / this.columnCount);
        if (len === 0) {
          return [[]];
        }
        const rem = tracks.length % this.columnCount;
        console.log(len);
        const chunks = [];
        let i = 0;
        const n = tracks.length;
        while (i < (n - rem)) {
          chunks.push(tracks.slice(i, i += len));
        }

        for (let j = 0; j < rem; j++) {
          chunks[j].push(tracks[tracks.length - (j + 1)]);
        }
        return chunks;
      })
    );
  }

  addToCart(track: Track) {
    this._cartService.addToCart(track);
    this._toastService.sendMessage('More heat in the cart.', 'is-success');
  }
}
