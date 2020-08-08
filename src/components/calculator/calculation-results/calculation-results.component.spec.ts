import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationResultsComponent } from './calculation-results.component';
import {CalculationSubscriptionService} from '../shared/services/calculation-subscription/calculation-subscription.service';

describe('CalculationResultsComponent', () => {
  let component: CalculationResultsComponent;
  let fixture: ComponentFixture<CalculationResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationResultsComponent ],
      providers: [CalculationSubscriptionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
