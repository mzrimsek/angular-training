import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectHasError, selectErrorMessage } from './reducers';
import * as actions from './actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hasError$: Observable<boolean>;
  errorMessage$: Observable<string>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new actions.LoadApplicationData());
    this.hasError$ = this.store.select(selectHasError);
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }
}
