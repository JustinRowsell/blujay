import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private message: BehaviorSubject<Message> = new BehaviorSubject(null);
  message$ = this.message.asObservable();

  constructor() { }

  sendMessage(content: string, style: string) {
    const msg = new Message(content, style);
    this.message.next(msg);
  }

  clearMessage() {
    this.message.next(null);
  }
}
