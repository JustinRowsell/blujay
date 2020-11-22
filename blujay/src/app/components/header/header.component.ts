import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartService: CartService;

  constructor(private _cartService: CartService) {
    this.cartService = _cartService;
  }

  ngOnInit(): void {
  }

}
