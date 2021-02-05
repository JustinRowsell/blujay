import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from 'src/app/components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private message: BehaviorSubject<Message> = new BehaviorSubject(null);
  message$ = this.message.asObservable();
  toastTimer: NodeJS.Timeout;

  constructor(private _snackBar: MatSnackBar) { }

  sendMessage(content: string, style: string) {
    // https://stackoverflow.com/questions/45439313/angular-2-4-how-to-style-angular-material-design-snackbar
    this._snackBar.openFromComponent(ToastComponent);
  }

  clearMessage() {
    this.message.next(null);
  }
}
