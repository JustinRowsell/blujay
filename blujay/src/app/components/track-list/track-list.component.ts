import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';
import { Observable } from 'rxjs';
import { Track } from 'src/app/models/track';
import { map, tap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AudioPlayerService } from 'src/app/services/audio-player/audio-player.service';
import { TrackModalService } from 'src/app/services/track-modal/track-modal.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  tracksArr$: Observable<Track[]>;
  columnCount = 3;

  constructor(private _trackService: TrackService, private _cartService: CartService,
              private _toastService: ToastService, private _playerService: AudioPlayerService,
              private _modalService: TrackModalService) { }

  ngOnInit(): void {
    this._trackService.loadTracks();
    this.tracksArr$ =this._trackService.tracks$;
  }

  addToCart(track: Track) {
    this._cartService.addToCart(track);
    this._toastService.sendMessage('More heat in the cart.', 'is-success');
  }

  removeFromCart(track: Track) {
    this._cartService.removeFromCart(track);
    this._toastService.sendMessage('Track removed.', 'is-warning');
  }

  playTrack(track: Track) {
    this._playerService.playTrack(track);
  }

  showTrack(track: Track) {
    this._modalService.showTrackDetails(track);
  }
}
