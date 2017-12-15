import { Component, OnInit } from '@angular/core';
import { BookDataService } from './book-data.service';
import { Observable } from 'rxjs/Observable';
import { Book } from './models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  constructor(private service: BookDataService) { }

  ngOnInit() {
    this.books$ = this.service.getBooks();
  }

}
