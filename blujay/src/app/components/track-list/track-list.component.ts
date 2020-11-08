import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';
import { Observable } from 'rxjs';
import { Track } from 'src/app/models/track';
import { map, tap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  tracksArr$: Observable<Array<Track[]>>;
  columnCount = 3;

  constructor(private trackService: TrackService, private cartService: CartService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.trackService.loadTracks();
    this.tracksArr$ = this.trackService.tracks$.pipe(
      map(tracks => {
        const len = Math.floor((tracks.length + 1) / this.columnCount);
        if (len === 0) {
          return [[]];
        }
        const rem = tracks.length % this.columnCount;

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
    this.cartService.addToCart(track);
    this.toastService.sendMessage('More heat in the cart.', 'is-success');
  }

  removeFromCart(track: Track) {
    this.cartService.removeFromCart(track);
    this.toastService.sendMessage('Track removed.', 'is-warning');
  }
}
