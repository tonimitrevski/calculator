import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {CalculationResultObjectValue} from '../../object-values/calculation-result.object-value';

@Injectable()
export class CalculationSubscriptionService {
  /**
   * Change event emitter.
   * {BehaviorSubject}
   */
  public changeSubject: Subject<CalculationResultObjectValue> = new Subject();

  /**
   * Change event observable.
   * Observable<CalculationResultObjectValue>}
   */
  public onChange: Observable<CalculationResultObjectValue> = this.changeSubject.asObservable();
}
