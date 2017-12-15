import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: TodoItem[] = [
    { description: 'Put up lights', completed: false },
    { description: 'Send mom gift', completed: true }
  ];

  constructor() { }

  ngOnInit() {
  }

  add(itemToAddInput: HTMLInputElement) {
    if (itemToAddInput.value !== '') {
      const newItem = {
        description: itemToAddInput.value,
        completed: false
      };
      this.items = [newItem, ...this.items];

      itemToAddInput.value = '';
      itemToAddInput.focus();
    }
  }

  toggleCompleted(item: TodoItem) {
    item.completed = !item.completed;
  }
}

interface TodoItem {
  description: string;
  completed: boolean;
}
