import {Component, OnDestroy, OnInit} from '@angular/core';
import {CalculationSubscriptionService} from '../shared/services/calculation-subscription/calculation-subscription.service';
import {Subscription} from 'rxjs';
import {CalculationResultObjectValue} from '../shared/object-values/calculation-result.object-value';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculation-results.component.html',
  styleUrls: ['./calculation-results.component.scss']
})
export class CalculationResultsComponent implements OnInit, OnDestroy {

  private calculationSubscriptionSubscription: Subscription;
  constructor(protected calculationSubscriptionService: CalculationSubscriptionService) {}
  listResults: Array<CalculationResultObjectValue> = [];

  ngOnInit(): void {
    this.calculationSubscriptionSubscription = this.calculationSubscriptionService.onChange.subscribe(
      (value: CalculationResultObjectValue) => {
        this.assignResult(value);
      });
  }

  private assignResult(value: CalculationResultObjectValue): void {
    if (this.listResults.length >= 5) {
      this.listResults.shift();
    }
    this.listResults.push(value);
  }

  ngOnDestroy(): void {
    this.calculationSubscriptionSubscription.unsubscribe();
  }
}
