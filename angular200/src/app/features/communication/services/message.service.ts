import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private message = 'Default Message';

  constructor(initialMessage?: string) {
    if (initialMessage) {
      this.message = initialMessage;
    }
  }

  setMessage(value: string) {
    this.message = value;
  }

  getMessage(): string {
    return this.message;
  }
}
