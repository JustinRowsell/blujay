import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentIntent } from '@stripe/stripe-js';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private _intent: BehaviorSubject<PaymentIntent> = new BehaviorSubject(null);
  intent$: Observable<PaymentIntent> = this._intent.asObservable();
  intentSub: Subscription;
  constructor(private _http: HttpClient, private _toastService: ToastService) { }

  generateIntent(): Observable<PaymentIntent> | void {
    this.intentSub = this._http.get(`${environment.api}/payment/new`).subscribe((intent) => {
      console.log(intent);
      this._intent.next(intent as PaymentIntent);
    }, (error) => {
      this._toastService.sendMessage('We can\'t load the tracks right now. Try again later.', 'is-danger');
      console.error(error);
    });
  }
}
