import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', reducer)
  ],
  declarations: [CounterComponent]
})
export class CounterModule { }
