import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesComponent } from './movies.component';
import { EntryComponent } from './entry/entry.component';
import { ListComponent } from './list/list.component';
import { SummaryComponent } from './summary/summary.component';
import { FilterComponent } from './filter/filter.component';
import { routes } from './routes';
import { reducers } from './reducers';
import { MovieEffects } from './effects/movies';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MovieEffects])
  ],
  declarations: [MoviesComponent, EntryComponent, ListComponent, SummaryComponent, FilterComponent]
})
export class MoviesModule { }
