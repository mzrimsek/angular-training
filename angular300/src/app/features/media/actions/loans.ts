import { Action } from '@ngrx/store';
import { LoanRecord } from '../reducers/loans';

export const LOAD_LOAN_DATA = '[Media] Load Loan Data';
export class LoadLoanData implements Action {
  readonly type = LOAD_LOAN_DATA;
  constructor() { }
}

export const LOAD_LOAN_DATA_SUCCEEDED = '[Media] Load Loan Data Succeeded';
export class LoadLoanDataSucceeded implements Action {
  readonly type = LOAD_LOAN_DATA_SUCCEEDED;
  constructor(public records: LoanRecord[]) { }
}

export type All = LoadLoanData
  | LoadLoanDataSucceeded;
