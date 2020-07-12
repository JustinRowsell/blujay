import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  private _message: BehaviorSubject<Message> = new BehaviorSubject(null);
  message$ = this._message.asObservable();

  constructor() { }

  sendMessage(content: string, style: string) {
    const msg = new Message(content, style);
    this._message.next(msg);
  }

  clearMessage() {
    this._message.next(null);
  }
}
