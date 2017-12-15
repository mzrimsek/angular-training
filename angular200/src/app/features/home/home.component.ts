import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message$: Observable<ResponseMessage>;
  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.message$ = this.client.get<ResponseMessage>('http://localhost:3000/message');
  }
}

interface ResponseMessage {
  message: string;
  by: string;
}
