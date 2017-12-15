import { EntityState, EntityAdapter } from '@ngrx/entity';
import { createEntityAdapter } from '@ngrx/entity';
import * as itemActions from '../actions/items';
import { MediaType } from '../models';

export interface MediaItem {
  id: string;
  title: string;
  summary: string;
  format: string;
  type: MediaType;
}

export interface State extends EntityState<MediaItem> { }

export const adapter: EntityAdapter<MediaItem> = createEntityAdapter<MediaItem>();
const initialState: State = adapter.getInitialState();

export function reducer(state: State = initialState, action: itemActions.All): State {
  switch (action.type) {
    case itemActions.LOAD_DATA_SUCCEEDED: {
      return adapter.addAll(action.items, state);
    }
    default: {
      return state;
    }
  }
}

