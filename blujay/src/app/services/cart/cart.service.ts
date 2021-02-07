import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from 'src/app/models/track';
import { TrackService } from '../track/track.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: BehaviorSubject<Track[]> = new BehaviorSubject([]);
  cart$ = this._cart.asObservable();

  private _total: BehaviorSubject<number> = new BehaviorSubject(0);
  total$ = this._total.asObservable();

  constructor(private _trackService: TrackService) { }

  addToCart(track: Track): void {
    const cartItems = this._cart.getValue();
    cartItems.push(track);
    this._trackService.trackAddedToCart(track.id);
    this._cart.next(cartItems);
  }

  removeFromCart(track: Track) {
    const cartItems = this._cart.getValue();
    const filtered = cartItems.filter(item => +item.id !== +track.id);
    this._trackService.trackRemovedFromCart(track.id);
    this._cart.next(filtered);
  }

  updateTotal() {
    const cart = this._cart.getValue();
    let total = 0;
    cart.forEach(track => { total += track.price; })
    this._total.next(total);
  }

}
