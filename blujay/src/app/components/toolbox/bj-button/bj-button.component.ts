import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bj-button',
  templateUrl: './bj-button.component.html',
  styleUrls: ['./bj-button.component.scss']
})
export class BjButtonComponent implements OnInit {
  @Input() text: string;
  @Input() classes: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
