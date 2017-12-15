import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as actions from '../../actions/game';
import { State } from '../../reducers';

@Component({
  selector: 'app-game-guess-entry',
  templateUrl: './guess-entry.component.html',
  styleUrls: ['./guess-entry.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuessEntryComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() secret: number;
  constructor(private store: Store<State>) { }

  ngOnInit() { }

  changeGuess(guessInput: HTMLInputElement) {
    if (guessInput.value) {
      const newGuess = Number(guessInput.value);
      this.store.dispatch(new actions.ChangeGuess(newGuess));
    }
  }

  makeGuess() {
    this.store.dispatch(new actions.MakeGuess());
    this.store.dispatch(new actions.UpdateGuessStatus());
  }
}
