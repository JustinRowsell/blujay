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
  private _intentId: BehaviorSubject<string> = new BehaviorSubject('');
  intentId$: Observable<string> = this._intentId.asObservable();
  intentSub: Subscription;
  constructor(private _http: HttpClient, private _toastService: ToastService) { }

  generateIntent(total: number, name:string): Observable<PaymentIntent> | void {
    this.intentSub = this._http.get<string>(`${environment.paymentApi}/payment/new?name=${name}&amount=${total * 1000}`).subscribe((intentId) => {
      console.log(intentId);
      this._intentId.next(intentId);
    }, (error) => {
      this._toastService.sendMessage('Unable to start checkout. Try again later.');
      console.error(error);
    });
  }
}
