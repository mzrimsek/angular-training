import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import shoppingComponentSelectors, { State } from './reducers';
import { Observable } from 'rxjs/Observable';
import { ProductListItem, ShoppingCartItem, CartSummary } from './models';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  products$: Observable<ProductListItem[]>;
  cartItems$: Observable<ShoppingCartItem[]>;
  cartSummary$: Observable<CartSummary>;
  loaded$: Observable<boolean>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.products$ = this.store.select(shoppingComponentSelectors.products);
    this.cartItems$ = this.store.select(shoppingComponentSelectors.cartItems);
    this.cartSummary$ = this.store.select(shoppingComponentSelectors.cartSummary);
    this.loaded$ = this.store.select(shoppingComponentSelectors.loaded);
  }

}
