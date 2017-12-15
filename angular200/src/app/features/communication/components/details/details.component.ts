import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../models';

@Component({
  selector: 'app-communication-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() item: TodoItem;
  constructor() { }

  ngOnInit() {
  }

}
