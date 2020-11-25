import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Track } from 'src/app/models/track';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems$: Observable<Track[]>;
  cartTotal: number;
  cartItemSub: Subscription;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.cartTotal = 0;
    this.cartItems$ = this._cartService.cart;
    this.cartItemSub = this.cartItems$.subscribe((cartItems) => {
      this.cartTotal = cartItems?.reduce((a, b) => +a + +b.price, 0) ?? 0;
    });
  }

  ngOnDestroy(): void {
    this.cartItemSub.unsubscribe();
  }

  removeFromCart(track: Track) {
    this._cartService.removeFromCart(track);
  }
}
