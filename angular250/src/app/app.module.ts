import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './components/login/user.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { reducer } from './components/todo-list/reducers';
import { TodoEffects } from './components/todo-list/todo.effects';
import { TodoDataService } from './components/todo-list/todo-data.service';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'todos',
    component: TodoListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    LoginComponent,
    BookListComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ todos: reducer }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [UserService, TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
