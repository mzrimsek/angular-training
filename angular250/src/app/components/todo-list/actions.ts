import { Action } from '@ngrx/store';
import { TodoItem, ApiError } from './models';

export const LOAD_DATA = '[Todos] Load Data';
export class LoadTodoData implements Action {
  readonly type = LOAD_DATA;
  constructor() { }
}

export const LOAD_DATA_SUCCEEDED = '[Todos] Load Data Succeeded';
export class LoadDataSucceeded implements Action {
  readonly type = LOAD_DATA_SUCCEEDED;
  constructor(public items: TodoItem[]) { }
}

export const LOAD_DATA_FAILED = '[Todos] Load Data Failed';
export class LoadDataFailed implements Action {
  readonly type = LOAD_DATA_FAILED;
  constructor(public error: ApiError) { }
}


export const ADD_ITEM = '[Todos] Add Item';
export class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor(public description: string) { }
}

export const ADD_ITEM_SUCCEDED = '[Todos] Add Item Succeeded';
export class AddItemSucceeded implements Action {
  readonly type = ADD_ITEM_SUCCEDED;
  constructor(public item: TodoItem) { }
}

export const ADD_ITEM_FAILED = '[Todos] Add Item Failed';
export class AddItemFailed implements Action {
  readonly type = ADD_ITEM_FAILED;
  constructor(public error: ApiError) { }
}


export const MARK_COMPLETE = '[Todos] Mark Complete';
export class MarkComplete implements Action {
  readonly type = MARK_COMPLETE;
  constructor(public item: TodoItem) { }
}

export const MARK_COMPLETE_FAILED = '[Todos] Mark Complete Failed';
export class MarkCompleteFailed implements Action {
  readonly type = MARK_COMPLETE_FAILED;
  constructor(public item: TodoItem) { }
}

export type All = LoadTodoData
  | LoadDataSucceeded
  | LoadDataFailed
  | AddItem
  | AddItemFailed
  | AddItemSucceeded
  | MarkComplete
  | MarkCompleteFailed;
