import { TodoDataService } from './todo-data.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import * as todoActions from './actions';
import { TodoItem } from './models';
import { TodoEffects } from './todo.effects';
import { TestBed } from '@angular/core/testing';

describe('our effects', () => {
  let actions: any;
  let service: TodoDataService;
  let effects: TodoEffects;
  let serviceMock: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        { provide: TodoDataService, useClass: MockDataService },
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(TodoEffects);
    service = TestBed.get(TodoDataService);

    it('should call the service', () => {
      actions = new ReplaySubject(1);
      actions.next(new todoActions.LoadTodoData());
      spyOn(service, 'getData').and.callThrough();
      effects.loadData$.subscribe(s => {
        console.log(s);
      });
      expect(service.getData).toHaveBeenCalled();
    });

    it('should use the failed action on error', () => {
      actions = new ReplaySubject(1);
      actions.next(new todoActions.LoadTodoData());
      spyOn(service, 'getData').and.callFake(() => {
        Observable.throw({ message: 'BLAMMO!' })
      });
      effects.loadData$.subscribe(s => {
        console.log(s);
      });
      expect(service.getData).toHaveBeenCalled();
    });
  });
});

class MockDataService extends TodoDataService {
  getData(): Observable<TodoItem[]> {
    // in a 'real' app this would be return http.get('someurl');
    return Observable.of([
      { id: '1', description: 'Clean Car', completed: false },
      { id: '2', description: 'Buy Milk', completed: true }
    ]);
  }
}
