import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouteEntry } from './common/components/nav/nav.component';
import { State } from './reducers';
import * as actions from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<State>) {
    store.dispatch(new actions.InitializeApplication());
  }

  routes: RouteEntry[] = [
    {
      caption: 'Home',
      router: [''],
      exact: true
    },
    {
      caption: 'Media Library',
      router: ['media'],
      exact: true
    },
    {
      caption: 'Game',
      router: ['game'],
      exact: true
    },
    {
      caption: 'Shopping',
      router: ['shopping'],
      exact: true
    },
    {
      caption: 'Misc',
      router: ['misc'],
      exact: false
    }
  ];
}
