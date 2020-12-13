import { Component, OnInit, ViewChild } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  PaymentIntent,
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
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

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };
  stripeService: StripeService ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  createIntent() {
    // this.stripeService.retrievePaymentIntent
  }

}
