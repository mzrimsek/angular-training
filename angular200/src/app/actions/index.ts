import { Action } from '@ngrx/store';

export const LOAD_DATA = '[App] Load Data';
export class LoadApplicationData implements Action {
  readonly type = LOAD_DATA;
  constructor() { }
}

export const APP_ERROR = '[App] Error';
export class ApplicationError implements Action {
  readonly type = APP_ERROR;
  constructor(public message: string) { }
}


export type All = LoadApplicationData | ApplicationError;
