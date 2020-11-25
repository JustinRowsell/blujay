import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from 'src/app/models/track';
import { TrackService } from '../track/track.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: BehaviorSubject<Track[]> = new BehaviorSubject([]);
  cart = this._cart.asObservable();

  constructor(private _trackService: TrackService) { }

  addToCart(track: Track): void {
    const cartItems = this._cart.getValue();
    cartItems.push(track);
    this._trackService.trackAddedToCart(track.id);
    this._cart.next(cartItems);
  }

  removeFromCart(track: Track) {
    const cartItems = this._cart.getValue();
    console.log(cartItems);
    const filtered = cartItems.filter(item => item.id !== item.id);
    console.log(filtered);
    this._trackService.trackRemovedFromCart(track.id);
    this._cart.next(filtered);
  }
}
