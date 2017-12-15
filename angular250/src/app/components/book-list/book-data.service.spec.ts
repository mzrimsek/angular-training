import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookDataService } from './book-data.service';
import { Book } from './models';

describe('the data service', () => {
  describe('getting some books', () => {
    let injector: TestBed;
    let service: BookDataService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [BookDataService],
        imports: [HttpClientTestingModule]
      });

      injector = getTestBed();
      service = injector.get(BookDataService);
      httpMock = injector.get(HttpTestingController);
    });

    it('getting some books', () => {

      const dummyBooks: Book[] = [
        { id: '1', title: 'War of the Worlds', author: 'Wells' },
        { id: '2', title: 'Fause', author: 'Goethe' }
      ];
      let result: Book[] = [];
      service.getBooks().subscribe(books => result = books);

      const req = httpMock.expectOne('http://someurl/books');
      expect(req.request.method).toBe('GET');
      console.log('fixing to flush');
      req.flush({ _data: dummyBooks });
      console.log('flushed');
      expect(result).toEqual(dummyBooks);
    });

    it('server unavailable', () => {
      const mockErrorResponse = {
        status: 503, statusText: 'Service Unavailable - try later'
      };
      let errorResponse: any;

      service.getBooks().subscribe(
        res => expect(true).toBe(false), // in other words, fail!
        err => errorResponse = err);

      httpMock.expectOne('http://someurl/books')
        .flush([], mockErrorResponse);

      console.log(errorResponse);
    });
  });
});
