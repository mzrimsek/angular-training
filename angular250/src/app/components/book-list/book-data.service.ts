import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BookApiResult, Book } from './models';
import 'rxjs/add/operator/map';

@Injectable()
export class BookDataService {

  constructor(private client: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.client.get<BookApiResult>('http://someurl/books')
      .map(b => b._data);
  }

}
