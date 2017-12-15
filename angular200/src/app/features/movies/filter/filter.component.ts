import { Component, OnInit, Input } from '@angular/core';
import { MovieSummary } from '../models/index';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import * as actions from '../actions/movies';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() summary: MovieSummary;
  @Input() filterBy: string;
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  filterByAll() { this.store.dispatch(new actions.FilterByAll()); }
  filterByPurchased() { this.store.dispatch(new actions.FilterByPurchased()); }
  filterByUnpurchased() { this.store.dispatch(new actions.FilterByUnpurchased()); }
}
