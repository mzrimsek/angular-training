import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as loanActions from '../actions/loans';

export interface LoanRecord {
  id: string;
  name: string;
}

export interface State extends EntityState<LoanRecord> { }

export const adapter = createEntityAdapter<LoanRecord>();
const initialState: State = adapter.getInitialState();

export function reducer(state: State = initialState, action: loanActions.All): State {
  switch (action.type) {
    case loanActions.LOAD_LOAN_DATA_SUCCEEDED: {
      return adapter.addAll(action.records, state);
    }
    default: {
      return state;
    }
  }
}
