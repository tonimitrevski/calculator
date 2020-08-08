import { Component } from '@angular/core';
import {CalculateService} from './shared/calculate/calculate.service';
import {AddExpressionService} from './shared/add-expression/add-expression.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  expression = '';
  private lastChar: string;
  private readonly removeExpressionChar = 'C';
  private readonly calculateExpressionChar = '=';
  private restartExpression = false;

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
      this.expression = CalculateService.execute(this.expression);
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
