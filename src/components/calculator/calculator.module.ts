import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import {GetRandomNumberService} from './shared/get-random-number/get-random-number.service';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [CommonModule],
  providers: [GetRandomNumberService],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
