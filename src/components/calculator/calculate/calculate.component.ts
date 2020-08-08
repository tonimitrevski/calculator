import { Component } from '@angular/core';
import {CalculateService} from './shared/calculate/calculate.service';
import {AddExpressionService} from './shared/add-expression/add-expression.service';
import {CalculationSubscriptionService} from '../shared/services/calculation-subscription/calculation-subscription.service';
import {CalculationResultObjectValue} from '../shared/object-values/calculation-result.object-value';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent {
  expression = '';
  private lastChar: string;
  private readonly removeExpressionChar = 'C';
  private readonly calculateExpressionChar = '=';
  private restartExpression = false;

  constructor(protected calculationSubscriptionService: CalculationSubscriptionService) {}

  onClick(e: HTMLElement): void {
    const classList: DOMTokenList = e.classList;

    if (!classList.contains('calculator_btn')) {
      return;
    }

    const currentChar: string = e.innerText;

    if (currentChar === this.removeExpressionChar) {
      this.restartExpressionImplementation();
      return;
    }

    if (this.restartExpression) {
      this.restartExpressionImplementation();
      this.restartExpression = false;
    }

    if (currentChar === this.calculateExpressionChar) {
      const result = CalculateService.execute(this.expression);
      this.calculationSubscriptionService.changeSubject.next(new CalculationResultObjectValue(this.expression, result));
      this.expression = result;
      this.restartExpression = true;
      return;
    }

    this.expression = AddExpressionService.execute(this.expression, currentChar, this.lastChar);
    this.lastChar = currentChar;
  }

  private restartExpressionImplementation(): void {
    this.expression = '';
  }
}
