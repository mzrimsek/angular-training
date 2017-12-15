import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGame from './game';

export interface GameState {
  game: fromGame.State;
}

export interface State {
  game: GameState;
}

export const reducers: ActionReducerMap<GameState> = {
  game: fromGame.reducer,
};

export const _selectGameState = createFeatureSelector<GameState>('game');
export const _selectGame = createSelector(_selectGameState, state => state.game);

export const selectGameSecretNumber = createSelector(_selectGame, game => game.secretNumber);
export const selectGameCurrentGuess = createSelector(_selectGame, game => game.currentGuess);
export const selectGameGuessCount = createSelector(_selectGame, game => game.guessCount);
export const selectGameStatus = createSelector(_selectGame, game => game.status);

export const selectGameOver = createSelector(selectGameGuessCount, selectGameStatus,
  (guessCount, gameStatus) => {
    return guessCount === 3 || gameStatus === 'correct';
  });
