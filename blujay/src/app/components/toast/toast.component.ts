import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  message$: Observable<Message>;
  style: string;

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.message$ = this.toastService.message$;
  }

  clear(): void {
    this.toastService.clearMessage();
  }
}
