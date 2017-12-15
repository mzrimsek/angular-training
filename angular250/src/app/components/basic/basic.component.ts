import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})
export class BasicComponent {
  message = 'Hello, World!';

  changeMessage() {
    this.message = 'Goodbye!';
  }
}
