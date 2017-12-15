import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from './common/common.module';
import { MediaModule } from './features/media/media.module';
import { GameModule } from './features/game/game.module';
import { ShoppingModule } from './features/shopping/shopping.module';
import { FormsStuffModule } from './features/forms-stuff/forms-stuff.module';

import { reducers } from './reducers';
import { environment } from '../environments/environment';

let imports = [
  BrowserModule,
  AppRoutingModule,
  CommonModule,
  HttpClientModule,
  MediaModule,
  GameModule,
  ShoppingModule,
  FormsStuffModule,
  StoreModule.forRoot(reducers),
  EffectsModule.forRoot([]),
];

if (environment.useStoreDevtools) {
  imports = [...imports, StoreDevtoolsModule.instrument()];
}

export default imports;
