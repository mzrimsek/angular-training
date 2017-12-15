import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import * as actions from '../actions/movies';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  addMovie(titleInput: HTMLInputElement, releaseDateInput: HTMLInputElement) {
    if (titleInput.value && releaseDateInput.value) {
      this.store.dispatch(new actions.MovieAdded(titleInput.value, releaseDateInput.value));
      titleInput.value = '';
      releaseDateInput.value = '';
      titleInput.focus();
    }
  }
}
