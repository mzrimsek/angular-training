// root reducer
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromErrors from './error';

export interface State {
  errors: fromErrors.State;
}

export const reducers: ActionReducerMap<State> = {
  errors: fromErrors.reducer
};

export const selectErrors = (state: State) => state.errors;

export const selectHasError = createSelector(selectErrors, state => state.hasError);
export const selectErrorMessage = createSelector(selectErrors, state => state.errorMessage);
