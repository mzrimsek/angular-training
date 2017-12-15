import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-communication-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  @Output() added = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  add(input: HTMLInputElement) {
    const thingToAdd = input.value;
    if (thingToAdd) {
      this.added.emit(thingToAdd);
      input.value = '';
      input.focus();
    }
  }
}
