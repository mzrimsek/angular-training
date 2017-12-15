import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodoItem } from './models';
import { Store } from '@ngrx/store';
import { State, selectTodoItems } from './reducers';
import * as actions from './actions';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items$: Observable<TodoItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new actions.LoadTodoData());
    this.items$ = this.store.select(selectTodoItems);
  }

  add(item: HTMLInputElement) {
    if (item.value) {
      this.store.dispatch(new actions.AddItem(item.value));
      item.value = '';
      item.focus();
    }
  }

  markCompleted(item: TodoItem) {
    this.store.dispatch(new actions.MarkComplete(item));
  }
}
