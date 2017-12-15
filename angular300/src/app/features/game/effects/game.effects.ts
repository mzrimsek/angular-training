import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as gameActions from '../actions/game';
import 'rxjs/add/operator/mergeMap';
import { randomValue } from '../utils';

@Injectable()
export class GameEffects {

  @Effect() resetGame$ =
    this.actions$
      .ofType(gameActions.RESET_GAME)
      .mergeMap(action => [
        new gameActions.SetSecretNumber(randomValue(1, 10))
      ]);

  constructor(private actions$: Actions) { }
}
