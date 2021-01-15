import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BjButtonComponent } from './bj-button.component';

describe('BjButtonComponent', () => {
  let component: BjButtonComponent;
  let fixture: ComponentFixture<BjButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BjButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BjButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
