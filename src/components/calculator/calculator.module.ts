import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate/calculate.component';
import {GetRandomNumberService} from './calculate/shared/get-random-number/get-random-number.service';
import {CalculationResultsComponent} from './calculation-results/calculation-results.component';
import {CalculationSubscriptionService} from './shared/services/calculation-subscription/calculation-subscription.service';

@NgModule({
  declarations: [CalculateComponent, CalculationResultsComponent],
  imports: [CommonModule],
  providers: [GetRandomNumberService, CalculationSubscriptionService],
  exports: [CalculateComponent, CalculationResultsComponent]
})
export class CalculatorModule { }
