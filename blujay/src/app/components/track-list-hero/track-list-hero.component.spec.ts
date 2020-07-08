import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListHeroComponent } from './track-list-hero.component';

describe('TrackListHeroComponent', () => {
  let component: TrackListHeroComponent;
  let fixture: ComponentFixture<TrackListHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackListHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackListHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
