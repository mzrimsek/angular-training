import { Action } from '@ngrx/store';
import { Product } from '../reducers/productlist';
import { ProductListItem, ShoppingCartItem } from '../models';

export const ADD_ITEM_TO_CART = '[Shopping] Add Item To Cart';
export class AddItemToCart implements Action {
  readonly type = ADD_ITEM_TO_CART;
  constructor(public item: ProductListItem) { }
}

export const REMOVE_ITEM_FROM_CART = '[Shopping] Remove Item From Cart';
export class RemoveItemFromCart implements Action {
  readonly type = REMOVE_ITEM_FROM_CART;
  constructor(public item: ShoppingCartItem) { }
}

export const LOAD_PRODUCTS = '[Shopping] Load Products';
export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
  constructor() { }
}

export const LOAD_PRODUCTS_SUCCEEDED = '[Shopping] Load Products Succeeded';
export class LoadProductsSucceeded implements Action {
  readonly type = LOAD_PRODUCTS_SUCCEEDED;
  constructor(public products: Product[]) { }
}

export type All = AddItemToCart | RemoveItemFromCart | LoadProducts | LoadProductsSucceeded;
