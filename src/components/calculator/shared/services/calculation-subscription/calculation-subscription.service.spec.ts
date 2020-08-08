import { TestBed } from '@angular/core/testing';

import { CalculationSubscriptionService } from './calculation-subscription.service';

describe('CalculationSubscriptionService', () => {
  let service: CalculationSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationSubscriptionService]
    });
    service = TestBed.inject(CalculationSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
