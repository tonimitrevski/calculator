import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateComponent } from './calculate.component';
import {CalculationSubscriptionService} from '../shared/services/calculation-subscription/calculation-subscription.service';

describe('CalculatorComponent', () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateComponent ],
      providers: [CalculationSubscriptionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
