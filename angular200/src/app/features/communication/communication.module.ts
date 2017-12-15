import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './communication.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { MessageComponent } from './components/message/message.component';
import { MessageService } from './services/message.service';

const messageService = new MessageService('Created at the module!');
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommunicationComponent, DataEntryComponent, ListComponent, DetailsComponent, MessageComponent],
  providers: [
    { provide: MessageService, useValue: messageService }
  ]
})
export class CommunicationModule { }
