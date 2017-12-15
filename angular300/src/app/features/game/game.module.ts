import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GameComponent } from './game.component';
import { GuessEntryComponent } from './components/guess-entry/guess-entry.component';
import { GuessResultComponent } from './components/guess-result/guess-result.component';

import { reducers } from './reducers';
import { GameInitializationEffects } from './effects/initialization.effects';
import { GameEffects } from './effects/game.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('game', reducers),
    EffectsModule.forFeature([GameInitializationEffects, GameEffects])
  ],
  declarations: [GameComponent, GuessEntryComponent, GuessResultComponent]
})
export class GameModule { }
