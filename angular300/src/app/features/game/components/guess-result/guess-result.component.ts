import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import * as actions from '../../actions/game';

@Component({
  selector: 'app-game-guess-result',
  templateUrl: './guess-result.component.html',
  styleUrls: ['./guess-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuessResultComponent implements OnInit {

  @Input() status: string;
  @Input() gameOver: boolean;
  constructor(private store: Store<State>) { }

  ngOnInit() { }

  resetGame() {
    this.store.dispatch(new actions.ResetGame());
  }

}
