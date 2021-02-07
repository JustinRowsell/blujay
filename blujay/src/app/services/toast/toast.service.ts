import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ToastComponent } from 'src/app/components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private message: BehaviorSubject<Message> = new BehaviorSubject(null);
  message$ = this.message.asObservable();
  toastTimer: NodeJS.Timeout;
  duration = 5 * 1000;
  verticalPos: MatSnackBarVerticalPosition = 'top';
  horizontalPos: MatSnackBarHorizontalPosition = 'end';

  constructor(private _snackBar: MatSnackBar) { }

  sendMessage(content: string) {
    this._snackBar.openFromComponent(ToastComponent, {
      panelClass: ['bj-snackbar'],
      duration: this.duration,
      verticalPosition: this.verticalPos,
      horizontalPosition: this.horizontalPos,
      data: {
        message: content
      }
    });
  }

  clearMessage() {
    this.message.next(null);
  }
}
