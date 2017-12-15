import { Component, OnInit, Input } from '@angular/core';
import { GiftItem } from '../models';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { GiftPurchased } from '../actions/gifts';

@Component({
  selector: 'app-gifts-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {

  @Input() gifts: GiftItem[];
  constructor(private store: Store<State>) { }

  ngOnInit() { }

  markPurchased(id: string) {
    this.store.dispatch(new GiftPurchased(id));
  }
}
