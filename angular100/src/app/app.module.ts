import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { GiftGivingComponent } from './components/gift-giving/gift-giving.component';
import { EntryFormComponent } from './components/gift-giving/entry-form/entry-form.component';
import { GiftListComponent } from './components/gift-giving/gift-list/gift-list.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    GiftGivingComponent,
    EntryFormComponent,
    GiftListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
