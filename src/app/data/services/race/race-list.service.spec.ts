import { TestBed } from '@angular/core/testing';

import { RaceListService } from './race-list.service';

describe('RaceListService', () => {
  let service: RaceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
