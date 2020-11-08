import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() arr: Observable<any[]>;
  count: number;

  constructor() { }

  ngOnInit(): void {
    this.arr.subscribe((list) => {
      this.count = list.length;
    });
  }

}
