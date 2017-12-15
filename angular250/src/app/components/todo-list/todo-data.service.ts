import { Injectable } from '@angular/core';
import { TodoItem } from './models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/* This is a service that would make actual HTTP class.
You'd inject in the HTTP service, and make calls from here. */

@Injectable()
export class TodoDataService {

  private id = 99;

  getData(): Observable<TodoItem[]> {
    // in a 'real' app this would be return http.get('someurl');
    return Observable.of([
      { id: '1', description: 'Clean Car', completed: false },
      { id: '2', description: 'Buy Milk', completed: true }
    ]);
  }

  addItem(description: string): Observable<TodoItem> {
    return Observable.of({
      id: (this.id++).toString(),
      description: description,
      completed: false
    });
  }
}
