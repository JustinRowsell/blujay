import { TestBed } from '@angular/core/testing';

import { TrackModalService } from './track-modal.service';

describe('TrackModalService', () => {
  let service: TrackModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
