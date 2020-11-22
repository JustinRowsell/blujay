import { Component, OnInit } from '@angular/core';
import { CartTrack } from 'src/app/models/cart-track';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartTrack[]>;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems$ = this._cartService.cart;
  }

}
