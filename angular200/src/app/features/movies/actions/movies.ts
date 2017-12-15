import { Action } from '@ngrx/store';
import { Movie } from '../reducers/movies';

let maxId = 100;
export const ADD_MOVIE = '[Movies] Add Movie';
export class MovieAdded implements Action {
  readonly type = ADD_MOVIE;
  id: string;
  constructor(public title: string, public releaseDate: string) {
    this.id = (maxId++).toString();
  }
}

export const FILTER_BY = '[Movies] Filter By';
export class FilterByAll implements Action {
  readonly type = FILTER_BY;
  readonly filter = 'all';
  constructor() { }
}

export class FilterByPurchased implements Action {
  readonly type = FILTER_BY;
  readonly filter = 'purchased';
  constructor() { }
}

export class FilterByUnpurchased implements Action {
  readonly type = FILTER_BY;
  readonly filter = 'unpurchased';
  constructor() { }
}

export const LOAD_DATA_SUCCEEDED = '[Movies] Load Data Succeeded';
export class LoadDataSucceeded implements Action {
  readonly type = LOAD_DATA_SUCCEEDED;
  constructor(public movies: Movie[]) { }
}

export type All = MovieAdded | FilterByAll | FilterByPurchased | FilterByUnpurchased | LoadDataSucceeded;
