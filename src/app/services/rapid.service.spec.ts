import { TestBed } from '@angular/core/testing';

import { RapidService } from './rapid.service';

describe('RapidService', () => {
  let service: RapidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
