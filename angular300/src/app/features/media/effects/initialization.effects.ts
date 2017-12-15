import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as appActions from '../../../actions';
import * as itemActions from '../actions/items';
import * as loanActions from '../actions/loans';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class MediaInitializationEffects {

  @Effect() loadData$ =
    this.actions$
      .ofType(itemActions.LOAD_DATA)
      .map(() => {
        return new itemActions.LoadDataSucceeded([
          { id: '1', title: 'Ready Player One', summary: 'An Ok book', type: 'book', format: null },
          { id: '2', title: 'Destiny 2', summary: 'Cool game, yo', type: 'game', format: 'xbox one' }
        ]);
      });

  @Effect() loadLoanData$ =
    this.actions$
      .ofType(loanActions.LOAD_LOAN_DATA)
      .map(() => {
        return new loanActions.LoadLoanDataSucceeded([
          { id: '1', name: 'Greg' }
        ]);
      });

  @Effect() initialize$ =
    this.actions$
      .ofType(appActions.APP_INIT)
      .mergeMap(action => [
        new itemActions.LoadData(),
        new loanActions.LoadLoanData()
      ]);

  constructor(private actions$: Actions) { }
}
