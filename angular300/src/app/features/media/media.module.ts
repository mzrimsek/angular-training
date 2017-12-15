import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MediaComponent } from './media.component';
import { MediaListComponent } from './components/media-list/media-list.component';

import { reducers } from './reducers';
import { MediaInitializationEffects } from './effects/initialization.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('mediaLibrary', reducers),
    EffectsModule.forFeature([MediaInitializationEffects])
  ],
  declarations: [MediaComponent, MediaListComponent]
})
export class MediaModule { }
