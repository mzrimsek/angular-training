import { Component, OnInit } from '@angular/core';
import { GiftItem } from './models';
import { Store } from '@ngrx/store';
import { State, selectGiftList } from '../../reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.css']
})
export class GiftGivingComponent implements OnInit {

  giftItems$: Observable<GiftItem[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.giftItems$ = this.store.select(selectGiftList);
  }

}
