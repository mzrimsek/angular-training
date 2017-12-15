import { Action } from '@ngrx/store';
import * as fromActions from '../actions';

export interface State {
  hasError: boolean;
  errorMessage: string;
}

const initialState: State = {
  hasError: false,
  errorMessage: null
};

export const reducer = (state: State = initialState, action: fromActions.All): State => {
  switch (action.type) {
    case fromActions.APP_ERROR {
      return {
        hasError: true,
        errorMessage: action.message
      };
    }
    default: {
      return state;
    }
  }
};
