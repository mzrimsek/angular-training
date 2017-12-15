import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeModule } from './features/home/home.module';
import { CommunicationModule } from './features/communication/communication.module';
import { CounterModule } from './features/counter/counter.module';
import { MoviesModule } from './features/movies/movies.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';

// Application Module - every angular app has exactly one of these
@NgModule({
  declarations: [
    // components that are part of this module
    AppComponent,
    NavComponent
  ],
  imports: [
    // other modules - library or feature modules
    BrowserModule,
    HomeModule,
    CommunicationModule,
    CounterModule,
    MoviesModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
