import { tassign } from 'tassign';
import * as actions from '../actions/game';

export type GuessStatus = 'low' | 'high' | 'correct' | 'init';

export interface State {
  secretNumber: number;
  currentGuess: number;
  guessCount: number;
  status: GuessStatus;
}

const initialState: State = {
  secretNumber: 0,
  currentGuess: null,
  guessCount: 0,
  status: 'init'
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.SET_SECRET_NUMBER: {
      return tassign(state, { secretNumber: action.value });
    }
    case actions.CHANGE_GUESS: {
      return tassign(state, { currentGuess: action.newGuess });
    }
    case actions.MAKE_GUESS: {
      return tassign(state, { guessCount: state.guessCount + 1 });
    }
    case actions.UPDATE_GUESS_STATUS: {
      const status = (guess, secret) => {
        if (guess < secret) {
          return 'low';
        } else if (guess > secret) {
          return 'high';
        } else {
          return 'correct';
        }
      };
      return tassign(state, { status: status(state.currentGuess, state.secretNumber) });
    }
    case actions.RESET_GAME: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
