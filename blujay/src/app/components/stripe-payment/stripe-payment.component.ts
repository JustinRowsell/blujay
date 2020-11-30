import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.scss']
})
export class StripePaymentComponent implements OnInit {
  totalAmount: number;
  constructor() {}

  ngOnInit() {
  }

  createStripeToken() {
    
  }
}
