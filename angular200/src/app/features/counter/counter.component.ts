import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { State, selectCount, selectDecrementDisabled, selectResetDisabled } from './reducers';
import { Observable } from 'rxjs/Observable';
import * as actions from './actions/counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  decrementDisabled$: Observable<boolean>;
  resetDisabled$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCount);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);
    this.resetDisabled$ = this.store.select(selectResetDisabled);
  }

  increment() {
    this.store.dispatch(new actions.CountIncremented());
  }

  decrement() {
    this.store.dispatch(new actions.CountDecremented());
  }

  reset() {
    this.store.dispatch(new actions.CountReset());
  }

  countBy(amount: number) {
    this.store.dispatch(new actions.CountBySet(amount));
  }
}
