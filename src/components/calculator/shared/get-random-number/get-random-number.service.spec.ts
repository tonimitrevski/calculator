import { TestBed } from '@angular/core/testing';

import { GetRandomNumberService } from './get-random-number.service';

describe('GetRandomNumberService', () => {
  let service: GetRandomNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRandomNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
