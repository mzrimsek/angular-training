import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';
export const COUNT_BY = '[Counter] Count By';

export class CountIncremented implements Action {
  readonly type = INCREMENT;
}

export class CountDecremented implements Action {
  readonly type = DECREMENT;
}

export class CountReset implements Action {
  readonly type = RESET;
}

export class CountBySet implements Action {
  readonly type = COUNT_BY;
  constructor(public by: number) { }
}

export type All = CountIncremented | CountDecremented | CountReset | CountBySet;
