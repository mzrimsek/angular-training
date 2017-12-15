import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../models';

@Component({
  selector: 'app-communication-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() caption: string;
  @Input() items: TodoItem[];
  @Output() completed = new EventEmitter<TodoItem>();
  @Output() selected = new EventEmitter<TodoItem>();
  constructor() { }

  ngOnInit() {
  }

  markCompleted(item: TodoItem) {
    // item.complete = true;
    this.completed.emit(item);
  }

  markSelected(item: TodoItem) {
    this.selected.emit(item);
  }
}
