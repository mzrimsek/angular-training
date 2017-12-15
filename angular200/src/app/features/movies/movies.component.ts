import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State, selectSummary, selectIsLoading } from './reducers';
import { MovieSummary } from './models';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  summary$: Observable<MovieSummary>;
  loading$: Observable<boolean>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.summary$ = this.store.select(selectSummary);
    this.loading$ = this.store.select(selectIsLoading);
  }
}
