import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { tassign } from 'tassign';
import * as actions from '../actions/movies';

export interface Movie {
  id: string;
  title: string;
  releaseDate: string;
}

export interface State extends EntityState<Movie> {
  filterBy: string;
  loading: boolean;
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

const initialState: State = adapter.getInitialState({
  filterBy: 'all',
  loading: true
});

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.LOAD_DATA_SUCCEEDED: {
      const newState = adapter.addAll(action.movies, state);
      return tassign(newState, { loading: false });
    }
    case actions.ADD_MOVIE: {
      return adapter.addOne({ id: action.id, title: action.title, releaseDate: action.releaseDate }, state);
    }
    case actions.FILTER_BY: {
      return tassign(state, { filterBy: action.filter });
    }
    default: {
      return state;
    }
  }
}
