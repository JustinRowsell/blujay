import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions;
  elementsOptions: StripeElementsOptions;
  stripeService: StripeService ;

  totalSub: Subscription;

  constructor(private _cartService: CartService, private _paymentService: PaymentService) { }

  ngOnInit(): void {
    this.elementsOptions= {
      locale: 'en'
    };
    this.cardOptions = {
      style: {
        base: {
          iconColor: '#666EE8',
          color: '#31325F',
          fontWeight: '300',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSize: '18px',
          '::placeholder': {
            color: '#CFD7E0'
          }
        }
      }
    };
    this.createIntent();
  }

  createIntent() {
    this.totalSub = this._cartService.total$.subscribe((total) => {
      if (total === 0) {
        return;
      }
      this._paymentService.generateIntent(total);
    });
  }

  ngOnDestroy() {
    this.totalSub.unsubscribe();
  }

}
