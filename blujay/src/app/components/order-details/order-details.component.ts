import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orderTotal$: Observable<number>;
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.orderTotal$ = this._cartService.total;
    this._cartService.updateTotal();
  }

}
