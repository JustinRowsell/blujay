import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private message: BehaviorSubject<Message> = new BehaviorSubject(null);
  message$ = this.message.asObservable();
  toastTimer: NodeJS.Timeout;

  constructor() { }

  sendMessage(content: string, style: string) {
    if (this.toastTimer)
      clearTimeout(this.toastTimer);

    const msg = new Message(content, style);
    this.message.next(msg);
    this.toastTimer = setTimeout(() => { this.clearMessage(); }, 3000);
  }

  clearMessage() {
    this.message.next(null);
  }
}
