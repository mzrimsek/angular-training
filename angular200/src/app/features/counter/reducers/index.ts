import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from '../actions/counter';
import { tassign } from 'tassign';

export interface State {
  count: number;
  by: number;
}

const initialState: State = {
  count: 0,
  by: 1
};

export const reducer = (state: State = initialState, action: fromCounter.All): State => {
  switch (action.type) {
    case fromCounter.INCREMENT: {
      return tassign(state, { count: state.count + state.by });
    }
    case fromCounter.DECREMENT: {
      return tassign(state, { count: state.count - state.by });
    }
    case fromCounter.RESET: {
      return tassign(state, { count: 0 });
    }
    case fromCounter.COUNT_BY: {
      return tassign(state, { by: action.by });
    }
    default: {
      return state;
    }
  }
};

const selectFeature = createFeatureSelector<State>('counter');

export const selectCount = createSelector(selectFeature, state => state.count);
export const selectBy = createSelector(selectFeature, state => state.by);

export const selectDecrementDisabled = createSelector(selectCount, selectBy, (count, by) => count - by < 0);
export const selectResetDisabled = createSelector(selectCount, count => count === 0);
