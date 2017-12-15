import { Action } from '@ngrx/store';

export const CHANGE_GUESS = '[Game] Change Guess';
export class ChangeGuess implements Action {
  readonly type = CHANGE_GUESS;
  constructor(public newGuess: number) { }
}

export const MAKE_GUESS = '[Game] Make Guess';
export class MakeGuess implements Action {
  readonly type = MAKE_GUESS;
  constructor() { }
}

export const UPDATE_GUESS_STATUS = '[Game] Update Guess Status';
export class UpdateGuessStatus implements Action {
  readonly type = UPDATE_GUESS_STATUS;
  constructor() { }
}

export const SET_SECRET_NUMBER = '[Game] Set Secret Number';
export class SetSecretNumber implements Action {
  readonly type = SET_SECRET_NUMBER;
  constructor(public value: number) { }
}

export const RESET_GAME = '[Game] Reset';
export class ResetGame implements Action {
  readonly type = RESET_GAME;
  constructor() { }
}

export type All = ChangeGuess | MakeGuess | UpdateGuessStatus | SetSecretNumber | ResetGame;

