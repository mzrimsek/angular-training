import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as actions from './actions';
import { TodoDataService } from './todo-data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoEffects {

  @Effect() loadData$ =
    this.actions$
      .ofType(actions.LOAD_DATA)
      .switchMap(action => this.service.getData()
        .map(results => new actions.LoadDataSucceeded(results))
        .catch(error => Observable.of(
          new actions.LoadDataFailed({ status: 500, message: 'That broke!' }))));

  @Effect() addItem$ =
    this.actions$
      .ofType(actions.ADD_ITEM)
      .map(action => <string>action['description'])
      .switchMap(description => this.service.addItem(description)
        .map(item => new actions.AddItemSucceeded(item))
      );

  constructor(private actions$: Actions, private service: TodoDataService) { }
}
