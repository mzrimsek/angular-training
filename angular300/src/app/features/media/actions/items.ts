import { Action } from '@ngrx/store';
import { MediaItem } from '../reducers/items';

export const LOAD_DATA = '[Media] Load Data';
export class LoadData implements Action {
  readonly type = LOAD_DATA;
  constructor() { }
}

export const LOAD_DATA_SUCCEEDED = '[Media] Load Data Succeeded';
export class LoadDataSucceeded implements Action {
  readonly type = LOAD_DATA_SUCCEEDED;
  constructor(public items: MediaItem[]) { }
}

export type All = LoadData
  | LoadDataSucceeded;
