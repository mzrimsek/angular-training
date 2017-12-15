import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-communication-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string;
  constructor(private service: MessageService) { }

  ngOnInit() {
  }

  setMessage(input: HTMLInputElement) {
    const message: string = input.value;
    this.message = message;
    this.service.setMessage(message);
    input.value = '';
  }

  getMessage() {
    this.message = this.service.getMessage();
  }

}
