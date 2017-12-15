import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProductList from './productlist';
import * as fromShoppingCart from './shoppingcart';
import { ProductListItem, ShoppingCartItem, CartSummary } from '../models';

export interface ShoppingState {
  products: fromProductList.State;
  cart: fromShoppingCart.State;
}

export interface State {
  shopping: ShoppingState;
}

export const reducers: ActionReducerMap<ShoppingState> = {
  products: fromProductList.reducer,
  cart: fromShoppingCart.reducer
};

export const _selectShoppingFeature = createFeatureSelector<ShoppingState>('shopping');

export const _selectShoppingProducts = createSelector(_selectShoppingFeature, state => state.products);
export const _selectShoppingCart = createSelector(_selectShoppingFeature, state => state.cart);
export const _selectLoadedShoppingProducts = createSelector(_selectShoppingProducts, state => state.loaded);

export const { selectAll: _selectAllShoppingProducts, selectEntities: _selectAllShoppingProductEntities }
  = fromProductList.adapter.getSelectors(_selectShoppingProducts);
export const { selectAll: _selectAllCartItems } = fromShoppingCart.adapter.getSelectors(_selectShoppingCart);

export const _selectAllShoppingProductListItems = createSelector(_selectAllShoppingProducts,
  products => products.map(
    product => <ProductListItem>{
      id: product.id,
      description: product.description,
      price: product.price,
      instock: product.inventory !== 0
    }));

export const _selectAllShoppingCartItems = createSelector(_selectAllShoppingProductEntities, _selectAllCartItems,
  (products, cartItems) => {
    return cartItems.map(
      cartItem => {
        const product = products[cartItem.id];
        return <ShoppingCartItem>{
          id: cartItem.id,
          description: product.description,
          price: product.price,
          quantity: cartItem.quantity,
          total: product.price * cartItem.quantity
        };
      });
  });

export const _selectTotalNumberOfItems = createSelector(_selectAllShoppingCartItems,
  items => items.map(item => item.quantity)
    .reduce((state, next) => state + next, 0));

export const _selectTotalItemCost = createSelector(_selectAllShoppingCartItems,
  items => items.map(item => item.total)
    .reduce((state, next) => state + next, 0));

export const _selectCartSummary = createSelector(_selectTotalNumberOfItems, _selectTotalItemCost,
  (numberOfItems, total) => {
    return <CartSummary>{
      numberOfItems,
      total
    };
  });

const shoppingComponentSelectors = {
  products: _selectAllShoppingProductListItems,
  cartItems: _selectAllShoppingCartItems,
  cartSummary: _selectCartSummary,
  loaded: _selectLoadedShoppingProducts
};

export default shoppingComponentSelectors;
