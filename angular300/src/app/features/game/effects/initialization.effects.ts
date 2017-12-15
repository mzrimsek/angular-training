import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as appActions from '../../../actions';
import * as gameActions from '../actions/game';
import 'rxjs/add/operator/mergeMap';
import { randomValue } from '../utils';

@Injectable()
export class GameInitializationEffects {

  @Effect() initialize$ =
    this.actions$
      .ofType(appActions.APP_INIT)
      .mergeMap(action => [
        new gameActions.SetSecretNumber(randomValue(1, 10))
      ]);

  constructor(private actions$: Actions) { }
}
