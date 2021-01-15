import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentIntent } from '@stripe/stripe-js';
import { BehaviorSubject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private _intent: BehaviorSubject<PaymentIntent[]> = new BehaviorSubject([]);
  intent$: Observable<PaymentIntent[]> = this._intent.asObservable();
  intentSub: Subscription;
  constructor(private _http: HttpClient) { }

  generateIntent(): Observable<PaymentIntent> | void {
    this.trackSub = this._http.get(`${environment.api}/tracks`).subscribe((tracks) => {
      this._tracks.next(tracks as Track[]);
    }, (error) => {
      this._toastService.sendMessage('We can\'t load the tracks right now. Try again later.', 'is-danger');
      console.error(error);
    });
  }
}
