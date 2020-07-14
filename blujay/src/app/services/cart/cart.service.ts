import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartTrack } from 'src/app/models/cart-track';
import { Track } from 'src/app/models/track';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: BehaviorSubject<CartTrack[]> = new BehaviorSubject([]);
  cart = this._cart.asObservable();

  constructor() { }

  addToCart(track: Track): void {
    const cartItems = this._cart.getValue();
    for (const item of cartItems) {
      if (item.track.id === track.id) {
        item.quantity++;
        return;
      }
    }

    cartItems.push(new CartTrack(track));
    this._cart.next(cartItems);
    track.inCart = true;
  }

  removeFromCart(track: Track) {
    const cartItems = this._cart.getValue();
    const filtered = cartItems.filter(item => item.track.id !== track.id);
    this._cart.next(filtered);
    track.inCart = false;
  }
}
