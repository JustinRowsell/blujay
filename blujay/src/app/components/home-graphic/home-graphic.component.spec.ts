import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGraphicComponent } from './home-graphic.component';

describe('HomeGraphicComponent', () => {
  let component: HomeGraphicComponent;
  let fixture: ComponentFixture<HomeGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
