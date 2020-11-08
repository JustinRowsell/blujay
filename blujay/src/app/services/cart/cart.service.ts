import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartTrack } from 'src/app/models/cart-track';
import { Track } from 'src/app/models/track';
import { TrackService } from '../track/track.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: BehaviorSubject<CartTrack[]> = new BehaviorSubject([]);
  cart = this._cart.asObservable();

  constructor(private _trackService: TrackService) { }

  addToCart(track: Track): void {
    const cartItems = this._cart.getValue();
    cartItems.push(new CartTrack(track));
    this._trackService.trackAddedToCart(track.id);
    this._cart.next(cartItems);
  }

  removeFromCart(track: Track) {
    const cartItems = this._cart.getValue();
    const filtered = cartItems.filter(item => item.track.id !== track.id);
    this._trackService.trackRemovedFromCart(track.id);
    this._cart.next(filtered);
  }
}
