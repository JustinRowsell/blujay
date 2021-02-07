import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ToastData } from 'src/app/models/toast-data';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

export class ToastComponent implements OnInit {
  message: string;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: ToastData) {}

  ngOnInit(): void {
    this.message = this.data.message;
  }
}
