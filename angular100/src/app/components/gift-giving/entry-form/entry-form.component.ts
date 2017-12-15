import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { GiftSuggested } from '../actions/gifts';

@Component({
  selector: 'app-gifts-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() { }

  add(nameInput: HTMLInputElement, ideaInput: HTMLInputElement) {
    if (nameInput.value !== '' && ideaInput.value !== '') {
      const recipient = nameInput.value;
      const giftIdea = ideaInput.value;

      this.store.dispatch(new GiftSuggested(recipient, giftIdea));

      nameInput.value = '';
      ideaInput.value = '';
      nameInput.focus();
    }
  }
}
