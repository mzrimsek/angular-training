import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartItem } from '../../models';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import * as actions from '../../actions';

@Component({
  selector: 'app-shopping-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit {

  @Input() cartItems: ShoppingCartItem[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  removeFromCart(item: ShoppingCartItem) {
    this.store.dispatch(new actions.RemoveItemFromCart(item));
  }

}
