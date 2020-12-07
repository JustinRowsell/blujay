import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Track } from 'src/app/models/track';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { TrackModalService } from 'src/app/services/track-modal/track-modal.service';

@Component({
  selector: 'app-track-modal',
  templateUrl: './track-modal.component.html',
  styleUrls: ['./track-modal.component.scss']
})
export class TrackModalComponent implements OnInit, OnDestroy {
  track: Track;
  private _trackSub: Subscription;
  showMe$: Observable<boolean>;

  constructor(private _modalService: TrackModalService, private _cartService: CartService,
              private _toastService: ToastService) { }

  ngOnInit(): void {
    this.showMe$ = this._modalService.showModal$;
    this._trackSub = this._modalService.modalTrack$.subscribe((t) =>{
      this.track = t;
    });
  }

  ngOnDestroy(): void {
    this._trackSub.unsubscribe();
  }

  closeModal() {
    this._modalService.hideTrackDetails();
  }

  addToCart(track: Track) {
    this._cartService.addToCart(track);
    this._toastService.sendMessage('More heat in the cart.', 'is-success');
  }

  removeFromCart(track: Track) {
    this._cartService.removeFromCart(track);
    this._toastService.sendMessage('Track removed.', 'is-warning');
  }
}
