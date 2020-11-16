import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';
import { Observable } from 'rxjs';
import { Track } from 'src/app/models/track';
import { map, tap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AudioPlayerService } from 'src/app/services/audio-player/audio-player.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  tracksArr$: Observable<Track[]>;
  columnCount = 3;

  constructor(private trackService: TrackService, private cartService: CartService,
              private toastService: ToastService, private playerService: AudioPlayerService) { }

  ngOnInit(): void {
    this.trackService.loadTracks();
    this.tracksArr$ =this.trackService.tracks$;
  }

  addToCart(track: Track) {
    this.cartService.addToCart(track);
    this.toastService.sendMessage('More heat in the cart.', 'is-success');
  }

  removeFromCart(track: Track) {
    this.cartService.removeFromCart(track);
    this.toastService.sendMessage('Track removed.', 'is-warning');
  }

  playTrack(track: Track) {
    this.playerService.playTrack(track);
  }
}
