import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Action, Store } from '@ngrx/store';
import { TodoListComponent } from './todo-list.component';
import { State } from './reducers';
import * as actions from './actions';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click, getDebugElements } from '../../utils';
import { Observable } from 'rxjs/Observable';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let store: MockStore<State>;
  let deAddItemButton: DebugElement;
  let elAddItemButton: HTMLButtonElement;
  let deAddItemInput: DebugElement;
  let elAddItemInput: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [{ provide: Store, useClass: MockStore }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    ({ debugElement: deAddItemButton, nativeElement: elAddItemButton } = getDebugElements('data-todo-item-button', fixture));
    ({ debugElement: deAddItemInput, nativeElement: elAddItemInput } = getDebugElements('data-todo-item-input', fixture));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch load data on init', () => {
    expect(store.dispatch).toHaveBeenCalledWith(new actions.LoadTodoData());
  });

  it('should allow adding an item', () => {
    elAddItemInput.value = 'Tacos!';
    click(elAddItemButton);
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(new actions.AddItem('Tacos!'));
  });
});

class MockStore<T> {
  dispatch(action: Action) {

  }

  select(fn: Function) {
    switch (fn.name) {
      case 'selectTodoItems': {
        return Observable.of([
          { id: '1', description: 'Buy Tacos', completed: true },
          { id: '2', description: 'Stuff Stockings', completed: false }
        ]);
      }
    }
  }
}
