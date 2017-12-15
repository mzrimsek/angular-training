import * as actions from '../actions/purchased';

export interface State {
  ids: string[];
}

const initialState: State = {
  ids: []
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.MOVIE_TICKET_PURCHASE_FAILED: {
      return {
        ids: state.ids.filter(id => id !== action.movie.id)
      };
    }
    case actions.PURCHASED_LOAD_SUCCEEDED: {
      return {
        ids: action.ids
      };
    }
    case actions.MOVIE_TICKET_PURCHASED: {
      return {
        ids: [action.movie.id, ...state.ids]
      };
    }
    default: {
      return state;
    }
  }
}
