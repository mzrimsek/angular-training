import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectGameCurrentGuess, selectGameSecretNumber, selectGameOver, selectGameStatus } from './reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  currentGuess$: Observable<number>;
  secretNumber$: Observable<number>;
  gameOver$: Observable<boolean>;
  gameStatus$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.currentGuess$ = this.store.select(selectGameCurrentGuess);
    this.secretNumber$ = this.store.select(selectGameSecretNumber);
    this.gameOver$ = this.store.select(selectGameOver);
    this.gameStatus$ = this.store.select(selectGameStatus);
  }

}
