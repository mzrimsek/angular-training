import { Component, OnInit } from '@angular/core';
import { TodoItem } from './models';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  // this data is going to come from an API...
  items: TodoItem[] = [
    { id: '1', description: 'Take out trash', complete: false },
    { id: '2', description: 'Clean garage', complete: false }
  ];
  private maxId = 3;
  selectedItem: TodoItem;
  constructor() { }

  ngOnInit() {
  }

  onItemCompleted(item: TodoItem) {
    // go to the API, whatever you need to do
    console.log('Marking ' + item.description + ' completed!');
    item.complete = true;
  }

  onItemAdded(newItem: string) {
    // the API call
    console.log('I would like to add ', newItem);
    const newTodo: TodoItem = {
      id: this.maxId++ + '',
      description: newItem,
      complete: false
    };
    this.items.push(newTodo);
  }

  onItemSelected(item: TodoItem) {
    console.log('Show details for ', item.description);
    this.selectedItem = item;
  }
}
