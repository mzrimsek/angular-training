import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { BookDataService } from './book-data.service';
import { Observable } from 'rxjs/Observable';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let de: DebugElement; // for the ul
  let el: HTMLUListElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent],
      providers: [{ provide: BookDataService, useClass: MockBookDataService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('ul'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets the book$ property', async () => {
    expect(component.books$).not.toBeUndefined();
    const books = await component.books$.first().toPromise();
    expect(books[1].title).toBe('Lincoln in the Bardo');
  });

  it('should have the list', () => {
    expect(el.childElementCount).toBe(2);
  });

  it('formats the list properly', () => {
    const li = <HTMLLIElement>el.firstElementChild;
    expect(li.innerText).toBe('Moby Dick by Melville');
  });
});

class MockBookDataService extends BookDataService {
  constructor() {
    super(null); // make sure we aren't using the HttpClient
  }

  getBooks() {
    return Observable.of([
      { id: '1', title: 'Moby Dick', author: 'Melville' },
      { id: '2', title: 'Lincoln in the Bardo', author: 'Saunders' }
    ]);
  }
}
