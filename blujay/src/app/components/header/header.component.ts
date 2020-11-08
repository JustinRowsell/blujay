import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  _cartService: CartService;
  constructor(cartService: CartService) {
    this._cartService = cartService;
  }

  ngOnInit(): void {
  }

}
