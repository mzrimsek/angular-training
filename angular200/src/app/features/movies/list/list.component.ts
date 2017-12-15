import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State, selectAllMovieListItems, selectSummary, selectFilterBy } from '../reducers';
import { MovieListItem, MovieSummary } from '../models';
import * as actions from '../actions/purchased';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies$ = new Observable<MovieListItem[]>();
  movieSummary$ = new Observable<MovieSummary>();
  filterBy$ = new Observable<string>();
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.movies$ = this.store.select(selectAllMovieListItems);
    this.movieSummary$ = this.store.select(selectSummary);
    this.filterBy$ = this.store.select(selectFilterBy);
  }

  purchaseTicketFor(movie: MovieListItem) {
    this.store.dispatch(new actions.MovieTicketPurchased(movie));
  }
}
